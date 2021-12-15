import styled from 'styled-components';
import { Button } from './common';
import { GoPrimitiveDot } from 'react-icons/go';
import { FiStar } from 'react-icons/fi';
import { TRepository } from '../types/index';
import { formatDate } from '../utils/formatDate';
type Props = {
  repository: TRepository;
};

const Repository = ({ repository }: Props) => {
  const {
    name,
    visibility,
    html_url,
    description,
    language,
    topics,
    updated_at,
  } = repository;
  return (
    <StyledRepository>
      <RepositoryContent>
        <Title>
          <Name href={html_url} target='_blank'>
            {name}
          </Name>
          <Tag>{visibility}</Tag>
        </Title>
        <Description>{description}</Description>
        <ListBadges>
          {topics.map((topic, idx) => (
            <Badge key={idx}>{topic}</Badge>
          ))}
        </ListBadges>
        <TechnologyAndDate>
          {language ? (
            <Technology>
              <TechnologyDot language={language} />
              {language}
            </Technology>
          ) : null}

          <Date>{formatDate(updated_at)}</Date>
        </TechnologyAndDate>
      </RepositoryContent>
      <Details>
        <ButtonStar>
          <FiStar />
          Star
        </ButtonStar>
      </Details>
    </StyledRepository>
  );
};

const StyledRepository = styled.article`
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const RepositoryContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Name = styled.a`
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.color.link};
  &:hover {
    text-decoration: underline;
  }
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 7px;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.text};
  border: 1px solid ${({ theme }) => theme.color.border};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.color.text};
  @media screen and (min-width: 768px) {
    max-width: 68%;
  }
`;

const ListBadges = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

const Badge = styled.div`
  color: ${({ theme }) => theme.color.link};
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.color.badge};
`;

const TechnologyAndDate = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  line-height: 1.5rem;
`;

const Technology = styled.p`
  display: flex;
  align-items: center;
`;

const getColorLanguage = (language: string): string => {
  interface Icolor {
    [key: string]: string;
  }
  const color: Icolor = {
    TypeScript: '#2b7489',
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
  };
  return color[language];
};

const TechnologyDot = styled(GoPrimitiveDot)<{ language: string }>`
  font-size: 1.5rem;
  color: ${({ language }) => (language ? getColorLanguage(language) : 'grey')};
`;

const Date = styled.div``;
const Details = styled.div``;

const ButtonStar = styled(Button)`
  display: flex;
  gap: 0.5rem;
`;
export default Repository;
