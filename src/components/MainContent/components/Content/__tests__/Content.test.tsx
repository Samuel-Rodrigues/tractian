import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import {
  StatusEnum,
  SensorTypeEnum,
  StatusIndicatorEnum,
  renderWithTheme,
} from "@utils";

import { Content } from "../";

type Status = StatusEnum;

const mockGetStatusColor = (status?: Status) => {
  switch (status) {
    case StatusEnum.OPERATING:
      return StatusIndicatorEnum.SUCCESS;
    case StatusEnum.ALERT:
      return StatusIndicatorEnum.ERROR;
    default:
      return StatusIndicatorEnum.WARNING;
  }
};

const mockGetStatusText = (status?: Status) => {
  switch (status) {
    case StatusEnum.OPERATING:
      return "Em operação";
    case StatusEnum.ALERT:
      return "Alerta";
    default:
      return "Desconhecido";
  }
};

describe("Content", () => {
  const defaultProps = {
    assetPath: ["Empresa", "Local", "Ativo"],
    selectedComponent: {
      id: "1",
      name: "Sensor de Energia",
      type: "component" as const,
      status: StatusEnum.OPERATING,
      sensorType: SensorTypeEnum.ENERGY,
      sensorId: "SENSOR-001",
      gatewayId: "GATEWAY-001",
      parentId: "PARENT-001",
    } as Component,
    getStatusColor: () => mockGetStatusColor(),
    getStatusText: () => mockGetStatusText(),
  };

  it("should render the component name correctly", () => {
    renderWithTheme(<Content {...defaultProps} />);
    expect(screen.getByText("Sensor de Energia")).toBeInTheDocument();
  });

  it("should display energy sensor type correctly", () => {
    renderWithTheme(<Content {...defaultProps} />);
    expect(screen.getByText("Tipo de Sensor:")).toBeInTheDocument();
    expect(screen.getByText("Energia")).toBeInTheDocument();
  });

  it("should display vibration sensor type correctly", () => {
    const vibrationProps = {
      ...defaultProps,
      selectedComponent: {
        ...defaultProps.selectedComponent,
        name: "Sensor de Vibração",
        sensorType: SensorTypeEnum.VIBRATION,
      },
    };
    renderWithTheme(<Content {...vibrationProps} />);
    expect(screen.getByText("Tipo de Sensor:")).toBeInTheDocument();
    expect(screen.getByText("Vibração")).toBeInTheDocument();
  });

  it("should display sensor ID", () => {
    renderWithTheme(<Content {...defaultProps} />);
    expect(screen.getByText("ID do Sensor:")).toBeInTheDocument();
    expect(screen.getByText("SENSOR-001")).toBeInTheDocument();
  });

  it("should display gateway ID", () => {
    renderWithTheme(<Content {...defaultProps} />);
    expect(screen.getByText("ID do Gateway:")).toBeInTheDocument();
    expect(screen.getByText("GATEWAY-001")).toBeInTheDocument();
  });
});
