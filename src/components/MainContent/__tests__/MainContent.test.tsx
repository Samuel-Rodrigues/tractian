import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";

import { StatusEnum, SensorTypeEnum, renderWithTheme } from "@utils";
import { useStores } from "@stores";

import { MainContent } from "../";

vi.mock("@stores", () => ({
  useStores: vi.fn(),
}));

describe("MainContent", () => {
  const mockCompanyStore = {
    companies: [],
    locations: [],
    assets: [],
    activeCompanyId: null,
    selectedComponent: null,
    loading: {
      companies: false,
      locations: false,
      assets: false,
    },
    error: null,
    setSelectedComponent: vi.fn(),
    setActiveCompany: vi.fn(),
    fetchCompanyData: vi.fn(),
    fetchCompanies: vi.fn(),
    get isLoading() {
      return false;
    },
    get hasError() {
      return false;
    },
    getLocationsForCompany: vi.fn(),
    getAssetsForCompany: vi.fn(),
    getAssetById: vi.fn(),
    getLocationById: vi.fn(),
    getAssetPath: vi.fn(),
  };

  it("should display EmptyComponent when no component is selected", () => {
    vi.mocked(useStores).mockReturnValue({
      companyStore: {
        ...mockCompanyStore,
        selectedComponent: null,
      },
    });

    renderWithTheme(<MainContent />);
    expect(
      screen.getByText("Selecione um componente no menu lateral")
    ).toBeInTheDocument();
  });

  it("should display Content when a component is selected", () => {
    const mockComponent = {
      id: "1",
      name: "Sensor de Energia",
      type: "component" as const,
      status: StatusEnum.OPERATING,
      sensorType: SensorTypeEnum.ENERGY,
      sensorId: "SENSOR-001",
      gatewayId: "GATEWAY-001",
    };

    vi.mocked(useStores).mockReturnValue({
      companyStore: {
        ...mockCompanyStore,
        selectedComponent: mockComponent,
        getAssetPath: vi.fn().mockReturnValue(["Empresa", "Local", "Ativo"]),
      },
    });

    renderWithTheme(<MainContent />);

    expect(screen.getByText("Sensor de Energia")).toBeInTheDocument();
    expect(screen.getByText("Tipo de Sensor:")).toBeInTheDocument();
    expect(screen.getByText("Energia")).toBeInTheDocument();
    expect(screen.getByText("ID do Sensor:")).toBeInTheDocument();
    expect(screen.getByText("SENSOR-001")).toBeInTheDocument();
    expect(screen.getByText("ID do Gateway:")).toBeInTheDocument();
    expect(screen.getByText("GATEWAY-001")).toBeInTheDocument();
  });
});
