import { createGlobalStyle, DefaultTheme } from 'styled-components';
export const dark: DefaultTheme = {
  color: {
    primary: 'hsl(216deg, 28%, 7%)', //dark
    link: 'hsl(212deg,100%, 67%)', //blue-10
    text: 'hsl(212deg 9% 58%)', //grey
    textPrincipal: 'hsl(210deg 17% 82%)',
    textHeader: 'hsl(210deg 17% 82%)',
    button: 'hsl(215deg, 15%, 15%)', //grey-dark
    border: 'hsl(210deg 67% 96% / 10%)', //grey-20
    borderHeader: 'hsl(11deg, 90%, 68%)', //orange
    badge: 'hsl(215deg 98% 61% / 15%)', //blue-opacity
    header: 'hsl(215deg 21% 11%)',
  },
};

export const light = {
  color: {
    primary: 'hsl(0deg 0% 100%)', //dark
    link: 'hsl(216deg 97% 36%)', //blue-10
    text: 'hsl(213deg 13% 16%)', //grey
    textPrincipal: 'hsl(213deg 13% 16%)',
    textHeader: 'hsl(0deg 0% 100%)',
    button: 'hsl(207deg 23% 92%)', //grey-dark
    border: 'hsl(212deg 12% 21%)', //grey-20
    borderHeader: 'hsl(11deg, 90%, 68%)', //orange
    badge: 'hsl(195deg 100% 94%)', //blue-opacity
    header: 'hsl(213deg 13% 16%)',
  },
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&display=swap');

  *{
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  body{
    background-color: ${({ theme }) => theme.color.primary};
    color:${({ theme }) => theme.color.text};
   
  }
  button{
    border: none;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
  input{
    border: none;
  }
`;
