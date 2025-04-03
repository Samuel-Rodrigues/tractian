import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Header, MainContent, Sidebar } from "@components";
import { useStores } from "@stores";

import { DashboardContainer, ContentContainer } from "./styles";

export const Dashboard = observer(() => {
  const { companyStore } = useStores();

  useEffect(() => {
    companyStore.fetchCompanies();
  }, [companyStore]);

  return (
    <DashboardContainer data-testid="dashboard-container">
      <Header />
      <ContentContainer>
        <Sidebar />
        <MainContent />
      </ContentContainer>
    </DashboardContainer>
  );
});
