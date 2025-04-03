declare type Location = {
  id: string;
  name: string;
  parentId: string | null;
};

declare type Asset = {
  id: string;
  name: string;
  locationId?: string | null;
  parentId?: string | null;
  sensorId?: string;
  sensorType?: SensorType;
  status?: Status;
  gatewayId?: string;
};

declare type TreeNode = {
  id: string;
  name: string;
  type: string;
  children?: TreeNode[];
  parentId?: string | null;
  locationId?: string | null;
  sensorType?: SensorType;
  status?: Status;
  sensorId?: string;
  gatewayId?: string;
};

declare type Status = "operating" | "alert" | null;

declare type SensorType = "energy" | "vibration" | null;

declare type StatusIndicator = "success" | "error" | "warning";