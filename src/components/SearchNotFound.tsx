import styled from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';

type Props = {
  word: string;
  result: number;
};

const SearchNotFound = ({ word, result }: Props) => {
  return (
    <StyledSearchNotFound>
      <SearchContent>
        <SearchNotFoundParagraph>
          <Results>{result}</Results> results for repositories matching
          <WordSearch> {word}</WordSearch> sorted by last updated
        </SearchNotFoundParagraph>
        <ButtonClear>
          <IoMdCloseCircle />
          Clear filter
        </ButtonClear>
      </SearchContent>
      <MessageNotFound>
        DavidMarioLC doesn’t have any repositories that match.
      </MessageNotFound>
    </StyledSearchNotFound>
  );
};

const StyledSearchNotFound = styled.section`
  color: ${({ theme }) => theme.color.textPrincipal};
`;

const SearchContent = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  justify-content: space-between;
`;

const SearchNotFoundParagraph = styled.p``;
const Results = styled.strong``;
const WordSearch = styled.strong``;

const ButtonClear = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  background: none;
  color: ${({ theme }) => theme.color.link};
  cursor: pointer;
  &:active {
    transform: scale(0.97);
  }
`;

const MessageNotFound = styled.h3`
  padding: 4rem 0;
  text-align: center;
  font-size: 1.5rem;
`;
export default SearchNotFound;
