import styled from 'styled-components';
import Repository from './Repository';

const Repositories = () => {
  return (
    <StyledRepositories>
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
    </StyledRepositories>
  );
};

const StyledRepositories = styled.section``;
export default Repositories;
