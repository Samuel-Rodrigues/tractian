import styled from "styled-components";
import { rem } from "polished";

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${rem(14)};
  width: ${rem(450)};
`;
