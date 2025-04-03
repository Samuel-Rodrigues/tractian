declare type Company = {
  id: string;
  name: string;
};

declare type LocationType = {
  id: string;
  name: string;
  parentId: string;
};

declare type Asset = {
  id: string;
  locationId: string;
  name: string;
  parentId: string | null;
  sensorType: SensorType;
  status: Status;
};

declare type SensorType = "energy" | "vibration" | null;

declare type Status = "operating" | "alert" | null;
