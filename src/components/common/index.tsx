import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.button};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.textPrincipal};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  &:active {
    transform: scale(0.97);
  }
`;

//layout APP
export const Layout = styled.div`
  padding: 1rem;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

export const Main = styled.main`
  flex: 3;
`;

export const Aside = styled.aside`
  flex: 1;
`;
