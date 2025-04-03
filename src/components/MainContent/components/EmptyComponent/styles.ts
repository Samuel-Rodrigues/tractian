import styled from "styled-components";
import { rem } from "polished";

export const MainContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.primary};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${rem(14)};
  span {
    font-size: ${rem(18)};
  }
`;
