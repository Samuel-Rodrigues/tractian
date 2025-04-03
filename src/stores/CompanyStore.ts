import { makeAutoObservable, runInAction } from "mobx";
import { companiesService } from "../services/api/companies";

export class CompanyStore {
  companies: Company[] = [];
  locations: LocationType[] = [];
  assets: Asset[] = [];
  activeCompanyId: string | null = null;
  selectedComponent: Component | null = null;
  loading = {
    companies: false,
    locations: false,
    assets: false,
  };
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedComponent(component: Component | null) {
    this.selectedComponent = component;
  }

  async setActiveCompany(id: string | null) {
    this.activeCompanyId = id;
    this.selectedComponent = null;
    if (id) {
      await this.fetchCompanyData(id);
    }
  }

  async fetchCompanyData(companyId: string) {
    try {
      this.loading.locations = true;
      this.loading.assets = true;
      this.error = null;

      const [locationsData, assetsData] = await Promise.all([
        companiesService.getLocations(companyId),
        companiesService.getAssets(companyId),
      ]);

      runInAction(() => {
        this.locations = locationsData;
        this.assets = assetsData;
        this.loading.locations = false;
        this.loading.assets = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error =
          error instanceof Error
            ? error.message
            : "Failed to fetch company data";
        this.loading.locations = false;
        this.loading.assets = false;
      });
    }
  }

  async fetchCompanies() {
    try {
      this.loading.companies = true;
      this.error = null;
      const data = await companiesService.fetchCompanies();
      runInAction(() => {
        this.companies = data;
        this.loading.companies = false;
        if (data.length > 0 && !this.activeCompanyId) {
          this.setActiveCompany(data[0].id);
        }
      });
    } catch (error) {
      runInAction(() => {
        this.error =
          error instanceof Error ? error.message : "Failed to fetch companies";
        this.loading.companies = false;
      });
    }
  }

  get isLoading() {
    return (
      this.loading.companies || this.loading.locations || this.loading.assets
    );
  }

  get hasError() {
    return !!this.error;
  }

  getLocationsForCompany(): LocationType[] {
    return this.locations || [];
  }

  getAssetsForCompany(): Asset[] {
    return this.assets || [];
  }

  getAssetById(assetId: string): Asset | undefined {
    return this.assets.find((asset) => asset.id === assetId);
  }

  getLocationById(locationId: string): LocationType | undefined {
    return this.locations.find((location) => location.id === locationId);
  }

  getAssetPath(assetId: string): string[] {
    const path: string[] = [];
    let currentAsset = this.getAssetById(assetId);

    while (currentAsset) {
      path.unshift(currentAsset.name);
      if (currentAsset.locationId) {
        const location = this.getLocationById(currentAsset.locationId);
        if (location) {
          path.unshift(location.name);
        }
        break;
      } else if (currentAsset.parentId) {
        currentAsset = this.getAssetById(currentAsset.parentId);
      } else {
        break;
      }
    }

    return path;
  }
}
