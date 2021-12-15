import { light, dark, GlobalStyle } from './theme/ThemeConfig';
import { ThemeProvider } from 'styled-components';
import { Layout, Main, Aside, Wrapper } from './components/common';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import Profile from './components/Profile';
import Search from './components/Search';
import Repositories from './components/Repositories';
// import SearchNotFound from './components/SearchNotFound';
import { useTheme } from './hooks/useTheme';
import { useUser } from './hooks/useUser';
import { useParams } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  const { username } = useParams();
  const [theme, toggleTheme] = useTheme();
  const [userExist, user, repositories] = useUser(username || 'davidmariolc');
  const totalRepositories = user.public_repos;

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Wrapper>
        {userExist ? (
          <Layout>
            <Aside>
              <Profile user={user} />
            </Aside>
            <Main>
              <TabNavigation totalRepositories={totalRepositories} />
              <Search />
              {/* <SearchNotFound /> */}
              <Repositories repositories={repositories} />
            </Main>
          </Layout>
        ) : (
          <NotFound />
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
