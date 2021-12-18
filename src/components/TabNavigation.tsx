import styled from 'styled-components';
import { FiBookOpen, FiBook, FiBox, FiBriefcase } from 'react-icons/fi';

type Props = {
  totalRepositories: number;
};
const TabNavigation = ({ totalRepositories }: Props) => {
  return (
    <StyledTabNavigation>
      <TabItem>
        <FiBookOpen />
        Overview
      </TabItem>
      <TabItem active={true}>
        <FiBook />
        Repositories <TotalRepositories>{totalRepositories}</TotalRepositories>
      </TabItem>
      <TabItem>
        <FiBriefcase />
        Project
      </TabItem>
      <TabItem>
        <FiBox />
        Packages
      </TabItem>
    </StyledTabNavigation>
  );
};

const StyledTabNavigation = styled.ul`
  /* padding-top: 2rem 0 1rem; */
  display: flex;
  gap: 2rem;
  overflow: auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.primary};
  position: sticky;
  top: 0;
`;

const TabItem = styled.li<{ active?: Boolean }>`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.color.textPrincipal};
  padding: 2rem 0 1rem;
  border-bottom: ${({ theme, active }) =>
    active ? `1px solid ${theme.color.borderHeader}` : 'red'};
`;

const TotalRepositories = styled.strong`
  background: ${({ theme }) => theme.color.button};
  padding: 0 0.5rem;
  border-radius: 2rem;
`;
export default TabNavigation;
