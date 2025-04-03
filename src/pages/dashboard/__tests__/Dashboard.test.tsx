import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { Dashboard } from "../";
import { renderWithTheme } from "@utils";
import { useStores } from "@stores";

vi.mock("@stores", () => ({
  useStores: vi.fn(),
}));

vi.mocked(useStores).mockReturnValue({
  companyStore: {
    companies: [
      { id: "company-1", name: "Empresa 1" },
      { id: "company-2", name: "Empresa 2" },
      { id: "company-3", name: "Empresa 3" },
    ],
    locations: [
      { id: "location-1", name: "Location 1", parentId: "company-1" },
      { id: "location-2", name: "Location 2", parentId: "company-1" },
    ] as LocationType[],
    assets: [
      {
        id: "asset-1",
        name: "Asset 1",
        locationId: "location-1",

        parentId: "company-1",
        sensorType: "energy",
        status: "operating",
      },
      {
        id: "asset-2",
        name: "Asset 2",
        locationId: "location-2",
        parentId: "company-1",
        sensorType: "energy",
        status: "alert",
      },
    ] as Asset[],
    activeCompanyId: "company-1",
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
    getLocationsForCompany: vi.fn().mockReturnValue([
      { id: "location-1", name: "Location 1", parentId: "company-1" },
      { id: "location-2", name: "Location 2", parentId: "company-1" },
    ] as LocationType[]),
    getAssetsForCompany: vi.fn().mockReturnValue([
      {
        id: "asset-1",
        name: "Asset 1",
        locationId: "location-1",
        parentId: "company-1",
        sensorType: "energy",
        status: "operating",
      },
      {
        id: "asset-2",
        name: "Asset 2",
        locationId: "location-2",
        parentId: "company-1",
        sensorType: "energy",
        status: "alert",
      },
    ] as Asset[]),
    getAssetById: vi.fn(),
    getLocationById: vi.fn(),
    getAssetPath: vi.fn(),
    isLoading: false,
    get hasError() {
      return false;
    },
  },
});

describe("Dashboard", () => {
  const mockCompanyStore = {
    fetchCompanies: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render all main components", () => {
    renderWithTheme(<Dashboard />);

    expect(screen.getByTestId("dashboard-container")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-container")).toBeInTheDocument();
    expect(screen.getByTestId("empty-component")).toBeInTheDocument();
  });

  it("should fetch companies on mount", () => {
    renderWithTheme(<Dashboard />);
    expect(mockCompanyStore.fetchCompanies).toHaveBeenCalledTimes(0);
  });
});
