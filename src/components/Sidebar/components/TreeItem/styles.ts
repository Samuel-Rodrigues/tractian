import styled, { css } from "styled-components";
import { rem } from "polished";
import { TreeStatus } from "../../../../utils/enums";

interface TreeItemContentProps {
  isExpandable: boolean;
  isExpanded: boolean;
  type: string;
  status?: TreeStatus;
  isSelected?: boolean;
}

interface StatusIndicatorProps {
  status: keyof typeof TreeStatus;
}

export const TreeItemContent = styled.div<TreeItemContentProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: ${({ isExpandable }) => (isExpandable ? "pointer" : "default")};
  font-size: ${rem(14)};
  color: ${({ theme }) => theme.colors.text.tertiary};
  position: relative;
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  transition: background-color 0.2s ease;

  ${({ theme, isExpandable, isExpanded }) =>
    isExpandable &&
    css`
      &:before {
        content: "";
        left: -${theme.spacing.sm};
        top: 50%;
        transform: translateY(-50%)
          ${isExpanded ? "rotate(0deg)" : "rotate(270deg)"};
        border-left: ${rem(4)} solid transparent;
        border-right: ${rem(4)} solid transparent;
        border-top: ${rem(4)} solid ${theme.colors.text.tertiary};
        transition: transform 0.2s ease;
      }
    `}

  ${({ theme, type, status }) =>
    (type === "component" || (type === "asset" && status)) &&
    css`
      &:after {
        content: "";
        position: absolute;
        right: ${theme.spacing.sm};
        width: ${rem(8)}px;
        height: ${rem(8)}px;
        border-radius: 50%;
        background-color: ${status === TreeStatus.OPERATING
          ? theme.colors.success
          : theme.colors.error};
      }
    `}

  &:hover {
    background-color: ${({ isExpandable }) =>
      isExpandable ? "rgba(255, 255, 255, 0.05)" : "transparent"};
  }
`;

export const TreeItemIcon = styled.img`
  width: ${rem(16)};
  height: ${rem(16)};
  object-fit: contain;
`;

export const TreeItemText = styled.span`
  font-size: ${rem(14)};
`;

export const TreeItemChildren = styled.div`
  margin-left: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const StatusIndicator = styled.span<StatusIndicatorProps>`
  width: ${rem(8)};
  height: ${rem(8)};
  border-radius: 50%;
  margin-left: auto;
  background-color: ${({ theme, status }) => {
    switch (status) {
      case TreeStatus.SUCCESS:
        return theme.colors.success;
      case TreeStatus.WARNING:
        return theme.colors.warning;
      case TreeStatus.ERROR:
        return theme.colors.error;
      default:
        return theme.colors.success;
    }
  }};
`;
