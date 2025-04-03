import { describe, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";

import { renderWithTheme } from "@utils";
import { useStores } from "@stores";
import { theme } from "@styles";

import { Header } from "../";

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
    locations: [],
    assets: [],
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
    getLocationsForCompany: vi.fn(),
    getAssetsForCompany: vi.fn(),
    getAssetById: vi.fn(),
    getLocationById: vi.fn(),
    getAssetPath: vi.fn(),
    get isLoading() {
      return false;
    },
    get hasError() {
      return false;
    },
  },
});

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the header with the correct company name", () => {
    const render = renderWithTheme(<Header />);

    expect(render.getByText("Empresa 1")).toBeInTheDocument();
    expect(render.getByText("Empresa 2")).toBeInTheDocument();
    expect(render.getByText("Empresa 3")).toBeInTheDocument();
  });

  it("should click on the company 1 button and activate the company 1", () => {
    const render = renderWithTheme(<Header />);

    const company1 = render.getByText("Empresa 1");
    const stylesCompany1 = window.getComputedStyle(company1);
    const company2 = render.getByText("Empresa 2");
    const stylesCompany2 = window.getComputedStyle(company2);
    const company3 = render.getByText("Empresa 3");
    const stylesCompany3 = window.getComputedStyle(company3);

    company1.click();

    expect(stylesCompany1.borderColor).toBe(theme.colors.border);
    expect(stylesCompany2.borderColor).toBe(theme.colors.primary);
    expect(stylesCompany3.borderColor).toBe(theme.colors.primary);
  });
});
