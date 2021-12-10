import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Wrapper } from './common';
import Navigation from './Navigation';

type Tprops = {
  theme: string;
  toggleTheme: () => void;
};
const Header = ({ toggleTheme, theme }: Tprops) => {
  return (
    <StyledHeader>
      <Wrapper>
        <HeaderContent>
          <NavigationWrapper>
            <Logo>
              <BsGithub />
            </Logo>
            <Navigation />
          </NavigationWrapper>
          <DarkModeButton onClick={() => toggleTheme()}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </DarkModeButton>
        </HeaderContent>
      </Wrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1rem 0;
  background: ${({ theme }) => theme.color.header};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Logo = styled.a`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.textHeader};
`;

const DarkModeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: ${({ theme }) => theme.color.textHeader};
  font-size: 1.5rem;
  padding: 0;
  cursor: pointer;

  &:active {
    transform: scale(0.96);
  }
`;

export default Header;
