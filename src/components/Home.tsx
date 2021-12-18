import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Layout, Main, Aside, Wrapper } from './common';
import TabNavigation from './TabNavigation';
import Profile from './Profile';
import Search from './Search';
import Repositories from './Repositories';
import SearchNotFound from './SearchNotFound';
import NotFound from './NotFound';
import Loading from './Loading';
import { useUser } from '../contexts/userContext';

const Home = () => {
  const { error, loading, user, repositories } = useUser();
  const [search, setSearch] = useState<string>('');

  const totalRepositories = user.public_repos;

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const resetSearch = () => {
    setSearch('');
  };

  const reposFiltered = repositories.filter(
    (repo) => repo.name.toLowerCase().search(search.trim()) >= 0
  );

  const totalReposFiltered = reposFiltered.length;

  if (error) return <NotFound />;
  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
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
              <SearchNotFound
                result={totalReposFiltered}
                word={search}
                username={user.login}
                resetSearch={resetSearch}
              />
            )}
          </Main>
        </Layout>
      )}
    </Wrapper>
  );
};

export default Home;
