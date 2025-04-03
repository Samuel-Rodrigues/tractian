import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`; 