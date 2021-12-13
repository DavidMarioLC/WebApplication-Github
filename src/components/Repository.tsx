import styled from 'styled-components';
import { Button } from './common';
import { GoPrimitiveDot } from 'react-icons/go';
import { FiStar } from 'react-icons/fi';

const Repository = () => {
  return (
    <StyledRepository>
      <RepositoryContent>
        <Title>
          <Name href='!#'> MobileApplication-WalletApp</Name> <Tag>Public</Tag>
        </Title>
        <Description>
          Lleva el control total de tus finanzas desde la palma de tu mano.
          Darte cuenta de los gastos que realizas te ayudara a pensar 2 veces
          antes de sacar la tarjeta para pagar.
        </Description>
        <ListBadges>
          <Badge>react</Badge>
          <Badge>typescript</Badge>
          <Badge>firebase</Badge>
        </ListBadges>
        <TechnologyAndDate>
          <Technology>
            <TechnologyDot language={'Html'} />
            Typescript
          </Technology>
          <Date>Updated 4 days ago</Date>
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
    Typescript: '#2b7489',
    JavaScript: '#f1e05a',
    Html: '#e34c26',
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
