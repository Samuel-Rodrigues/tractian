import { observer } from "mobx-react-lite";

import { CompanyIconPng, LogoTractian } from "@assets";
import { useStores } from "@stores";

import {
  HeaderContainer,
  Logo,
  UnitButtons,
  UnitButton,
  CompanyIcon,
} from "./styles";

export const Header = observer(() => {
  const { companyStore } = useStores();

  const handleUnitClick = (unitId: string) => {
    companyStore.setActiveCompany(unitId);
  };

  return (
    <HeaderContainer>
      <Logo src={LogoTractian} alt="Tractian" />
      <UnitButtons>
        {companyStore.companies.map((unit) => (
          <UnitButton
            key={unit.id}
            data-testid={`unit-button-${unit.id}`}
            $active={companyStore.activeCompanyId === unit.id}
            onClick={() => handleUnitClick(unit.id)}
          >
            <CompanyIcon src={CompanyIconPng} alt={unit.name} />
            {unit.name}
          </UnitButton>
        ))}
      </UnitButtons>
    </HeaderContainer>
  );
});
