import styled from "styled-components";
import { rem } from "polished";

import { StatusIndicatorEnum } from "@utils";

interface StatusBadgeProps {
  status: Status;
}

interface StatusIndicatorProps {
  status: string;
}

interface DetailItemProps {
  status?: string;
}

export const MainContentContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.primary};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${rem(24)};
  }

  p {
    font-size: ${rem(16)};
  }
`;

export const ComponentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const StatusBadge = styled.div<StatusBadgeProps>`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${rem(14)};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  background-color: ${({ theme, status }) =>
    status === "operating"
      ? theme.colors.success + "20"
      : theme.colors.error + "20"};

  color: ${({ theme, status }) =>
    status === "operating" ? theme.colors.success : theme.colors.error};
`;

export const DetailItem = styled.div<DetailItemProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const DetailLabel = styled.span`
  font-size: ${rem(14)};
  color: ${({ theme }) => theme.colors.text.secondary};
  min-width: ${rem(120)};
`;

export const DetailValue = styled.span`
  font-size: ${rem(14)};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const BreadcrumbPath = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${rem(14)};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const BreadcrumbSeparator = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ComponentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 ${rem(2)} ${rem(4)} rgba(0, 0, 0, 0.1);
`;

export const ComponentName = styled.h1`
  font-size: ${rem(24)};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const StatusIndicator = styled.div<StatusIndicatorProps>`
  width: ${rem(8)};
  height: ${rem(8)};
  border-radius: 50%;
  background-color: ${({ theme, status }) => {
    switch (status) {
      case StatusIndicatorEnum.SUCCESS:
        return theme.colors.success;
      case StatusIndicatorEnum.ERROR:
        return theme.colors.error;
      case StatusIndicatorEnum.WARNING:
        return theme.colors.warning;
      default:
        return theme.colors.warning;
    }
  }};
`;

export const StatusText = styled.span`
  font-size: ${rem(14)};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StatusBadges = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Badge = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${rem(14)};
`;

export const EquipmentTitle = styled.h1`
  font-size: ${rem(24)};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  span {
    width: ${rem(12)};
    height: ${rem(12)};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.success};
    display: inline-block;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem(300)}, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const DetailCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const DetailImage = styled.img`
  width: 100%;
  height: ${rem(200)};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const DetailTitle = styled.h2`
  font-size: ${rem(18)};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${rem(14)};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
