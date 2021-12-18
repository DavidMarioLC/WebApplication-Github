import { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGithubApi } from '../services/User';
import { TUser, TRepository } from '../types/index';

type UserContextType = {
  error: boolean;
  loading: boolean;
  user: TUser;
  repositories: TRepository[];
  type: string;
  changeOptionType: (value: string) => void;
  language: string;
  changeOptionLanguage: (value: string) => void;
  sort: string;
  changeOptionSort: (value: string) => void;
};

export const UserContext = createContext<UserContextType>({
  error: false,
  loading: true,
  user: {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: '',
    blog: '',
    location: '',
    email: null,
    hireable: null,
    bio: '',
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '2012-03-04T22:32:01Z',
    updated_at: '2021-12-02T21:13:19Z',
  },
  repositories: [],
  type: 'all',
  changeOptionType: () => {},
  language: 'all',
  changeOptionLanguage: () => {},
  sort: 'all',
  changeOptionSort: () => {},
});

const UserProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const { username } = useParams();
  const [user, setUser] = useState<TUser>({
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: '',
    blog: '',
    location: '',
    email: null,
    hireable: null,
    bio: '',
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '2012-03-04T22:32:01Z',
    updated_at: '2021-12-02T21:13:19Z',
  });
  const [repositories, setRepositories] = useState<TRepository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  //filters
  const [type, setType] = useState<string>('all');
  const [language, setLanguage] = useState<string>('all');
  const [sort, setSort] = useState<string>('pushed');

  const changeOptionType = (value: string) => {
    setType(value);
  };

  const changeOptionLanguage = (value: string) => {
    setLanguage(value);
  };

  const changeOptionSort = (value: string) => {
    setSort(value);
  };
  useEffect(() => {
    const getAsyncUserAndRepositories = async () => {
      const { userExist, user, repositories } = await fetchGithubApi(
        username,
        type,
        sort
      );
      if (userExist) {
        setLoading(false);
        setUser(user);
        setRepositories(repositories);
      } else {
        setError(true);
        setLoading(false);
      }
    };
    getAsyncUserAndRepositories();
  }, [username, type, sort]);

  const value = {
    error,
    loading,
    user,
    repositories,
    type,
    changeOptionType,
    language,
    changeOptionLanguage,
    sort,
    changeOptionSort,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

export { UserProvider, useUser };
