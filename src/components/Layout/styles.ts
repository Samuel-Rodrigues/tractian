import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.background.primary};
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`; 