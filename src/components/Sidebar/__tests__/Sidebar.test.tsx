import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";

import { renderWithTheme, StatusEnum } from "@utils";
import { useStores } from "@stores";

import { Sidebar } from "../";

vi.mock("@stores", () => ({
  useStores: vi.fn(),
}));

const mockLocations = [
  {
    id: "loc1",
    name: "Location 1",
    parentId: null,
  },
  {
    id: "loc2",
    name: "Location 2",
    parentId: "loc1",
  },
];

const mockAssets = [
  {
    id: "asset1",
    name: "Asset 1",
    locationId: "loc1",
    parentId: null,
    status: StatusEnum.OPERATING,
    sensorType: null,
  },
  {
    id: "comp1",
    name: "Component 1",
    locationId: "loc2",
    parentId: "asset1",
    status: StatusEnum.OPERATING,
    sensorType: "energy",
  },
];

describe("Sidebar", () => {
  const mockCompanyStore = {
    activeCompanyId: "company1",
    loading: {
      locations: false,
      assets: false,
    },
    locations: mockLocations,
    assets: mockAssets,
    selectedComponent: null,
    setSelectedComponent: vi.fn(),
    getLocationsForCompany: vi.fn().mockReturnValue(mockLocations),
    getAssetsForCompany: vi.fn().mockReturnValue(mockAssets),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useStores as any).mockReturnValue({
      companyStore: mockCompanyStore,
    });
  });

  it("should show loading state when data is being fetched", () => {
    (useStores as any).mockReturnValue({
      companyStore: {
        ...mockCompanyStore,
        loading: {
          locations: true,
          assets: false,
        },
      },
    });

    renderWithTheme(<Sidebar />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("should filter tree items when searching", () => {
    renderWithTheme(<Sidebar />);

    const searchInput = screen.getByPlaceholderText("Buscar...");
    fireEvent.change(searchInput, { target: { value: "Location" } });

    expect(screen.getByText("Location 1")).toBeInTheDocument();
    expect(screen.queryByText("Asset 1")).not.toBeInTheDocument();
  });

  it("should handle node expansion", () => {
    renderWithTheme(<Sidebar />);

    const locationNode = screen.getByText("Location 1");
    fireEvent.click(locationNode);

    expect(screen.getByText("Location 2")).toBeInTheDocument();
  });
});
