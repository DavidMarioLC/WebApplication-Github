import { light, dark, GlobalStyle } from './theme/ThemeConfig';
import { ThemeProvider } from 'styled-components';
import { Layout, Main, Aside, Wrapper } from './components/common';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import Profile from './components/Profile';
import Search from './components/Search';
import SearchNotFound from './components/SearchNotFound';
import Repositories from './components/Repositories';
import { useTheme } from './hooks/useTheme';
function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Wrapper>
        <Layout>
          <Aside>
            <Profile />
          </Aside>
          <Main>
            <TabNavigation />
            <Search />
            {/* <SearchNotFound /> */}
            <Repositories />
          </Main>
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
