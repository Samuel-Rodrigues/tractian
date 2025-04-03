import { CompanyStore } from "./CompanyStore";

export class RootStore {
  companyStore: CompanyStore;

  constructor() {
    this.companyStore = new CompanyStore();
  }
}

export const rootStore = new RootStore();

export const useStores = () => {
  return rootStore;
};
