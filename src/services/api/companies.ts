import { api } from "./config";

export const companiesService = {
  fetchCompanies: async (): Promise<Company[]> => {
    const response = await api.get<Company[]>("/companies");
    return response.data;
  },

  getLocations: async (companyId: string): Promise<LocationType[]> => {
    const response = await api.get<LocationType[]>(
      `/companies/${companyId}/locations`
    );
    return response.data;
  },

  getAssets: async (companyId: string): Promise<Asset[]> => {
    const response = await api.get<Asset[]>(`/companies/${companyId}/assets`);
    return response.data;
  },
};
