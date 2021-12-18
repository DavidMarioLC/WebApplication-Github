import styled from 'styled-components';
import Select from './Select';
import { useUser } from '../contexts/userContext';
type Props = {
  searchValue: string;
  changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const optionsType = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Public',
    value: 'public',
  },
  {
    label: 'Private',
    value: 'sources',
  },
  {
    label: 'Forks',
    value: 'forks',
  },
  {
    label: 'Archived',
    value: 'archived',
  },
  {
    label: 'Mirrors',
    value: 'mirrors',
  },
];

const optionsLanguage = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'TypeScript',
    value: 'typeScript',
  },
  {
    label: 'JavaScript',
    value: 'javascript',
  },
  {
    label: 'HTML',
    value: 'HTML',
  },
  {
    label: 'CSS',
    value: 'CSS',
  },
];

const optionsSort = [
  {
    label: 'Last updated',
    value: 'pushed',
  },
  {
    label: 'Name',
    value: 'full_name',
  },
  {
    label: 'Stars',
    value: 'Stars',
  },
];

const Search = ({ searchValue, changeSearch }: Props) => {
  const {
    type,
    language,
    sort,
    changeOptionType,
    changeOptionLanguage,
    changeOptionSort,
  } = useUser();
  return (
    <StyledSearch>
      <SearchInput
        value={searchValue}
        onChange={changeSearch}
        placeholder='Find a repository...'
      />
      <Actions>
        <Select
          title='Type'
          defaultOption={type}
          options={optionsType}
          changeOption={changeOptionType}
        />
        <Select
          title='Language'
          defaultOption={language}
          options={optionsLanguage}
          changeOption={changeOptionLanguage}
        />
        <Select
          title='Sort'
          defaultOption={sort}
          options={optionsSort}
          changeOption={changeOptionSort}
        />
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
