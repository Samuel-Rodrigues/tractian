import {
  TreeItemContent,
  TreeItemIcon,
  TreeItemText,
  TreeItemChildren,
  StatusIndicator,
} from "./styles";

import { TreeStatus } from "../../../../utils/enums";

interface TreeItemProps {
  node: TreeNode;
  level: number;
  isExpanded: boolean;
  isSelected: boolean;
  onNodeClick: (node: TreeNode) => void;
  expandedNodes: Set<string>;
}

export const TreeItem = ({
  node,
  level,
  isExpanded,
  isSelected,
  onNodeClick,
  expandedNodes,
}: TreeItemProps) => {
  const hasChildren = Boolean(node.children?.length);

  return (
    <div>
      <TreeItemContent
        isExpandable={hasChildren}
        isExpanded={isExpanded}
        type={node.type}
        status={
          node.status === "operating" ? TreeStatus.OPERATING : TreeStatus.ERROR
        }
        isSelected={isSelected}
        onClick={() => onNodeClick(node)}
      >
        <TreeItemIcon
          src={`/src/assets/icons/${node.type}.svg`}
          alt={`${node.type} icon`}
        />
        <TreeItemText>{node.name}</TreeItemText>
        {(node.type === "component" ||
          (node.type === "asset" && node.status)) && (
          <StatusIndicator
            status={
              node.status === "operating"
                ? TreeStatus.SUCCESS
                : TreeStatus.ERROR
            }
          />
        )}
      </TreeItemContent>
      {isExpanded && hasChildren && (
        <TreeItemChildren>
          {node.children?.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              level={level + 1}
              isExpanded={expandedNodes.has(child.id)}
              isSelected={false}
              onNodeClick={onNodeClick}
              expandedNodes={expandedNodes}
            />
          ))}
        </TreeItemChildren>
      )}
    </div>
  );
};
