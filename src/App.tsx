import { light, dark, GlobalStyle } from './theme/ThemeConfig';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Home from './components/Home';
import { UserProvider } from './contexts/userContext';
function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <UserProvider>
        <Home />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
