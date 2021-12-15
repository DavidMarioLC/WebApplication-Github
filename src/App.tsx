import { light, dark, GlobalStyle } from './theme/ThemeConfig';
import { ThemeProvider } from 'styled-components';
import { Layout, Main, Aside, Wrapper } from './components/common';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import Profile from './components/Profile';
import Search from './components/Search';
import Repositories from './components/Repositories';
import SearchNotFound from './components/SearchNotFound';
import { useTheme } from './hooks/useTheme';
import { useUser } from './hooks/useUser';
import { useParams } from 'react-router-dom';
import NotFound from './components/NotFound';
import { useState } from 'react';

function App() {
  const { username } = useParams();
  const [theme, toggleTheme] = useTheme();
  const [userExist, user, repositories] = useUser(username || 'davidmariolc');
  const [search, setSearch] = useState<string>('');

  const totalRepositories = user.public_repos;

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const reposFiltered = repositories.filter(
    (repo) => repo.name.toLowerCase().search(search.trim()) >= 0
  );

  const totalReposFiltered = reposFiltered.length;

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
              <Search searchValue={search} changeSearch={changeSearch} />
              {totalReposFiltered > 0 ? (
                <Repositories repositories={reposFiltered} />
              ) : (
                <SearchNotFound result={totalReposFiltered} word={search} />
              )}
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
