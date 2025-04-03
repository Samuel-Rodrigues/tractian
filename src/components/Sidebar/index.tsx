import { useEffect, useState, useMemo } from "react";
import { observer } from "mobx-react-lite";

import { useStores } from "@stores";
import { SidebarContainer, TreeContainer } from "./styles";
import { Loading, SearchInput, TreeItem } from "./components";

const Sidebar = observer(() => {
  const { companyStore } = useStores();
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [treeData, setTreeData] = useState<TreeNode[]>([]);

  const filteredTreeData = useMemo(() => {
    if (!searchTerm.trim()) return treeData;

    const searchLower = searchTerm.toLowerCase();
    const filterNode = (node: TreeNode): TreeNode | null => {
      const matchesSearch = node.name.toLowerCase().includes(searchLower);
      const filteredChildren = node.children
        ?.map((child) => filterNode(child))
        .filter((child): child is TreeNode => child !== null);

      if (matchesSearch) {
        return node;
      }

      if (filteredChildren?.length) {
        return {
          ...node,
          children: filteredChildren,
        };
      }

      return null;
    };

    return treeData
      .map((node) => filterNode(node))
      .filter((node): node is TreeNode => node !== null);
  }, [treeData, searchTerm]);

  const buildTree = (
    locations: LocationType[],
    assets: Asset[]
  ): TreeNode[] => {
    const locationMap = new Map<string, TreeNode>();
    const rootNodes: TreeNode[] = [];

    locations?.forEach((location) => {
      const node: TreeNode = {
        id: location.id,
        name: location.name,
        type: "location",
        children: [],
        parentId: location.parentId,
      };
      locationMap.set(location.id, node);

      if (!location.parentId) {
        rootNodes.push(node);
      }
    });

    locations.forEach((location) => {
      if (location.parentId) {
        const parentNode = locationMap.get(location.parentId);
        if (parentNode?.children) {
          parentNode.children.push(locationMap.get(location.id)!);
        }
      }
    });

    const assetsByParent = new Map<string, Asset[]>();
    assets.forEach((asset) => {
      if (asset.parentId) {
        const parentAssets = assetsByParent.get(asset.parentId) || [];
        assetsByParent.set(asset.parentId, [...parentAssets, asset]);
      }
    });

    const processAssetChildren = (parentAsset: Asset, parentNode: TreeNode) => {
      const children = assetsByParent.get(parentAsset.id) || [];
      children.forEach((child) => {
        const childNode: TreeNode = {
          id: child.id,
          name: child.name,
          type: child.sensorType ? "component" : "asset",
          children: [],
          parentId: child.parentId,
          sensorType: child.sensorType,
          status: child.status,
        };
        if (parentNode.children) {
          parentNode.children.push(childNode);

          if (!child.sensorType) {
            processAssetChildren(child, childNode);
          }
        }
      });
    };

    assets.forEach((asset) => {
      if (!asset.sensorType && !asset.parentId) {
        const assetNode: TreeNode = {
          id: asset.id,
          name: asset.name,
          type: "asset",
          children: [],
          locationId: asset.locationId,
          status: asset.status,
          sensorType: asset.sensorType,
        };

        if (asset.locationId) {
          const locationNode = locationMap.get(asset.locationId);
          if (locationNode?.children) {
            locationNode.children.push(assetNode);
          }
        } else {
          rootNodes.push(assetNode);
        }

        processAssetChildren(asset, assetNode);
      }
    });

    const sortNodes = (nodes: TreeNode[]) => {
      nodes.sort((a, b) => a.name.localeCompare(b.name));
      nodes.forEach((node) => {
        if (node.children?.length) {
          sortNodes(node.children);
        }
      });
    };

    sortNodes(rootNodes);
    return rootNodes;
  };

  const handleNodeClick = (node: TreeNode) => {
    if (node.type === "component" || node.type === "asset") {
      companyStore.setSelectedComponent({
        id: node.id,
        name: node.name,
        sensorId: node.sensorId || undefined,
        sensorType: node.sensorType || undefined,
        status: node.status || undefined,
        gatewayId: node.gatewayId || undefined,
        parentId: node.parentId || undefined,
        type: node.type,
      });
    }
    if (node.children?.length) {
      toggleNode(node.id);
    }
  };

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const isLoading =
    companyStore.loading.locations || companyStore.loading.assets;

  useEffect(() => {
    const activeCompanyId = companyStore.activeCompanyId;
    if (
      activeCompanyId &&
      !companyStore.loading.locations &&
      !companyStore.loading.assets
    ) {
      const locations = companyStore.getLocationsForCompany();
      const assets = companyStore.getAssetsForCompany();
      const tree = buildTree(locations, assets);
      setTreeData(tree);
    }
  }, [
    companyStore.activeCompanyId,
    companyStore.locations,
    companyStore.assets,
    companyStore.loading.locations,
    companyStore.loading.assets,
  ]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <SidebarContainer data-testid="sidebar-container">
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
          />
          <TreeContainer>
            {filteredTreeData.map((node) => (
              <TreeItem
                key={node.id}
                node={node}
                level={0}
                isExpanded={expandedNodes.has(node.id)}
                isSelected={companyStore.selectedComponent?.id === node.id}
                onNodeClick={handleNodeClick}
                expandedNodes={expandedNodes}
              />
            ))}
          </TreeContainer>
        </SidebarContainer>
      )}
    </>
  );
});

export { Sidebar };
