import styled from "styled-components";
import { rem } from "polished";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  height: ${rem(64)};
`;

export const Logo = styled.img`
  height: ${rem(16)};
  width: auto;
`;

export const UnitButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CompanyIcon = styled.img`
  width: ${rem(18)};
  height: ${rem(18)};
  object-fit: contain;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const UnitButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid ${({ theme, $active }) =>
    !$active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.text.tertiary};
  font-size: ${rem(14)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.primary : "rgba(255, 255, 255, 0.05)"};
  }
`;
