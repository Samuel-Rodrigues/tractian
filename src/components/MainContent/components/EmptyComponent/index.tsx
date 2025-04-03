import { ContentArea, LoadingContainer, MainContentContainer } from "./styles";

export const EmptyComponent = () => {
  return (
    <MainContentContainer data-testid="empty-component">
      <ContentArea>
        <LoadingContainer>
          <span>Selecione um componente no menu lateral</span>
        </LoadingContainer>
      </ContentArea>
    </MainContentContainer>
  );
};
