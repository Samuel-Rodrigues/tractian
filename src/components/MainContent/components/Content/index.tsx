import {
  MainContentContainer,
  BreadcrumbPath,
  BreadcrumbItem,
  BreadcrumbSeparator,
  ContentArea,
  StatusIndicator,
  StatusText,
  StatusContainer,
  ComponentInfo,
  ComponentName,
  ComponentDetails,
  DetailItem,
  DetailLabel,
  DetailValue,
} from "./styles";

type Props = {
  assetPath: string[];
  selectedComponent: Component;
  getStatusColor: (status?: Status) => string;
  getStatusText: (status?: Status) => string;
};

export const Content = ({
  assetPath,
  selectedComponent,
  getStatusColor,
  getStatusText,
}: Props) => (
  <MainContentContainer>
    <BreadcrumbPath>
      {assetPath.map((item, index) => (
        <BreadcrumbItem key={index}>
          {item}
          {index < assetPath.length - 1 && (
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
          )}
        </BreadcrumbItem>
      ))}
    </BreadcrumbPath>
    <ContentArea>
      <ComponentInfo>
        <ComponentName>{selectedComponent.name}</ComponentName>
        <StatusContainer>
          <StatusIndicator status={getStatusColor(selectedComponent.status)} />
          <StatusText>{getStatusText(selectedComponent.status)}</StatusText>
        </StatusContainer>
        <ComponentDetails>
          {selectedComponent.sensorType && (
            <DetailItem>
              <DetailLabel>Tipo de Sensor:</DetailLabel>
              <DetailValue>
                {selectedComponent.sensorType === "energy"
                  ? "Energia"
                  : "Vibração"}
              </DetailValue>
            </DetailItem>
          )}
          {selectedComponent.sensorId && (
            <DetailItem>
              <DetailLabel>ID do Sensor:</DetailLabel>
              <DetailValue>{selectedComponent.sensorId}</DetailValue>
            </DetailItem>
          )}
          {selectedComponent.gatewayId && (
            <DetailItem>
              <DetailLabel>ID do Gateway:</DetailLabel>
              <DetailValue>{selectedComponent.gatewayId}</DetailValue>
            </DetailItem>
          )}
        </ComponentDetails>
      </ComponentInfo>
    </ContentArea>
  </MainContentContainer>
);
