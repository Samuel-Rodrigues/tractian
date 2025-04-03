declare type Component = {
  id: string;
  name: string;
  sensorId?: string;
  sensorType?: SensorType;
  status?: Status;
  gatewayId?: string;
  parentId?: string;
  type: "location" | "asset" | "component";
};
