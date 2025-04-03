import styled from "styled-components";
import { rem } from "polished";

export const SearchInputContainer = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${rem(14)};
`;
