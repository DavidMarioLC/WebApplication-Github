import styled from 'styled-components';
import Image404 from '../images/404.svg';

const NotFound = () => {
  return (
    <StyledNotFound>
      <Image src={Image404} />
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  background: ${({ theme }) => theme.color.primary};
  height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 60%;
  width: 100%;
`;

export default NotFound;
