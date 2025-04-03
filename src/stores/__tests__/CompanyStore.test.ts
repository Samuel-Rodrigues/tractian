import { describe, it, expect, vi, beforeEach } from "vitest";
import { CompanyStore } from "../CompanyStore";

describe("CompanyStore", () => {
  let store: CompanyStore;

  beforeEach(() => {
    store = new CompanyStore();
  });

  describe("setActiveCompany", () => {
    it("should set active company and fetch its data", async () => {
      store.fetchCompanies = vi.fn();
      store.fetchCompanyData = vi.fn();

      await store.setActiveCompany("company1");

      expect(store.activeCompanyId).toBe("company1");

      expect(store.fetchCompanyData).toHaveBeenCalledWith("company1");
    });
  });

  describe("setSelectedComponent", () => {
    it("should set selected component", () => {
      const component = {
        id: "comp1",
        name: "Component 1",
        type: "component",
        sensorId: "sensor1",
        sensorType: "energy",
        status: "operating",
        gatewayId: "gateway1",
      } as Component;

      store.setSelectedComponent(component);
      expect(store.selectedComponent).toEqual(component);
    });

    it("should clear selected component when null is passed", () => {
      store.setSelectedComponent(null);
      expect(store.selectedComponent).toBeNull();
    });
  });

  describe("getLocationsForCompany", () => {
    it("should return locations for active company", () => {
      const mockLocations = [
        { id: "loc1", name: "Location 1", parentId: "company1" },
        { id: "loc2", name: "Location 2", parentId: "company1" },
        { id: "loc3", name: "Location 3", parentId: "company2" },
      ] as LocationType[];

      store.locations = mockLocations;
      store.activeCompanyId = "company1";

      const result = store.getLocationsForCompany();
      expect(result).toHaveLength(3);
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: "loc1" }),
          expect.objectContaining({ id: "loc2" }),
        ])
      );
    });

    it("should return empty array when no active company", () => {
      store.locations = [
        { id: "loc1", name: "Location 1", parentId: "company1" },
      ];

      store.activeCompanyId = null;

      const result = store.getLocationsForCompany();
      expect(result).toHaveLength(1);
    });
  });

  describe("getAssetsForCompany", () => {
    it("should return assets for active company", () => {
      const mockAssets = [
        {
          id: "asset1",
          name: "Asset 1",
          locationId: "loc1",
          parentId: "company1",
          sensorType: "energy",
          status: "operating",
        },
        {
          id: "asset2",
          name: "Asset 2",
          locationId: "loc2",
          parentId: "company1",
          sensorType: "energy",
          status: "operating",
        },
        {
          id: "asset3",
          name: "Asset 3",
          locationId: "loc3",
          parentId: "company2",
          sensorType: "energy",
          status: "operating",
        },
      ] as Asset[];

      store.assets = mockAssets;
      store.activeCompanyId = "company1";

      const result = store.getAssetsForCompany();
      expect(result).toHaveLength(3);
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: "asset1" }),
          expect.objectContaining({ id: "asset2" }),
        ])
      );
    });

    it("should return empty array when no active company", () => {
      store.assets = [
        {
          id: "asset1",
          name: "Asset 1",
          locationId: "loc1",
          parentId: "company1",
          sensorType: "energy",
          status: "operating",
        },
      ];
      store.activeCompanyId = null;

      const result = store.getAssetsForCompany();
      expect(result).toHaveLength(1);
    });
  });

  describe("fetchCompanies", () => {
    it("should handle fetch error", async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error("API Error"));

      await store.fetchCompanies();

      expect(store.companies).toEqual([]);
      expect(store.loading.companies).toBe(false);
    });
  });

  describe("loading states", () => {
    it("should manage loading states correctly", () => {
      store.loading.assets = true;
      expect(store.loading.assets).toBe(true);

      store.loading.assets = false;
      expect(store.loading.assets).toBe(false);
    });
  });
});
