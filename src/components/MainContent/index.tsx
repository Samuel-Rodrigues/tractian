import { observer } from "mobx-react-lite";

import { useStores } from "@stores";
import { StatusEnum, StatusIndicatorEnum } from "@utils";

import { EmptyComponent } from "./components/EmptyComponent";
import { Content } from "./components/Content";

export const MainContent = observer(() => {
  const { companyStore } = useStores();
  const selectedComponent = companyStore.selectedComponent;

  if (!selectedComponent) {
    return <EmptyComponent />;
  }

  const getStatusColor = (status?: Status) => {
    switch (status) {
      case StatusEnum.OPERATING:
        return StatusIndicatorEnum.SUCCESS;
      case StatusEnum.ALERT:
        return StatusIndicatorEnum.ERROR;
      default:
        return StatusIndicatorEnum.WARNING;
    }
  };

  const getStatusText = (status?: Status) => {
    switch (status) {
      case StatusEnum.OPERATING:
        return "Em operação";
      case StatusEnum.ALERT:
        return "Alerta";
      default:
        return "Desconhecido";
    }
  };

  const assetPath = companyStore.getAssetPath(selectedComponent.id);
  return (
    <Content
      data-testid="main-content-container"
      assetPath={assetPath}
      selectedComponent={selectedComponent}
      getStatusColor={getStatusColor}
      getStatusText={getStatusText}
    />
  );
});
