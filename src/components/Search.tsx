import styled from 'styled-components';

type Props = {
  searchValue: string;
  changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ searchValue, changeSearch }: Props) => {
  return (
    <StyledSearch>
      <SearchInput
        value={searchValue}
        onChange={changeSearch}
        placeholder='Find a repository...'
      />
      <Actions>
        <button>Type</button>
        <button>Language</button>
        <button>Sort</button>
      </Actions>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  position: sticky;
  top: 67px;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  gap: 1rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.25rem 0.625rem;
  line-height: 1.5rem;
  border-radius: 4px;
  font-size: 0.825rem;
  background: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.text};
  outline: none;
  &:focus {
    border-color: hsl(216deg, 84%, 52%);
    /* box-shadow: rgb(12, 45, 107) 0px 0px 0px 3px; */
  }
`;
const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default Search;
