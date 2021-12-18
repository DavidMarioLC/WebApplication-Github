import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrapper>
      <StyledLoading></StyledLoading>
    </LoadingWrapper>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 73px);
`;
const StyledLoading = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.color.button};
  border-left-color: ${({ theme }) => theme.color.link};
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;

export default Loading;
