import styled from 'styled-components';
import Repository from './Repository';
import { TRepository } from '../types/index';
type Props = {
  repositories: TRepository[];
};
const Repositories = ({ repositories }: Props) => {
  return (
    <StyledRepositories>
      {repositories.map((repository) => (
        <Repository key={repository.id} repository={repository} />
      ))}
    </StyledRepositories>
  );
};

const StyledRepositories = styled.section``;
export default Repositories;
