import { useState, useEffect } from 'react';
import { fetchGithubApi } from '../services/User';
import { TUser, TRepository } from '../types/index';

export const useUser = (username: string): [boolean, TUser, TRepository[]] => {
  const [userExist, setUserExist] = useState<boolean>(true);
  const [user, setUser] = useState<TUser>({
    login: 'kentcdodds',
    id: 1500684,
    node_id: 'MDQ6VXNlcjE1MDA2ODQ=',
    avatar_url: 'https://avatars.githubusercontent.com/u/1500684?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/kentcdodds',
    html_url: 'https://github.com/kentcdodds',
    followers_url: 'https://api.github.com/users/kentcdodds/followers',
    following_url:
      'https://api.github.com/users/kentcdodds/following{/other_user}',
    gists_url: 'https://api.github.com/users/kentcdodds/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/kentcdodds/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/kentcdodds/subscriptions',
    organizations_url: 'https://api.github.com/users/kentcdodds/orgs',
    repos_url: 'https://api.github.com/users/kentcdodds/repos',
    events_url: 'https://api.github.com/users/kentcdodds/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/kentcdodds/received_events',
    type: 'User',
    site_admin: false,
    name: 'Kent C. Dodds',
    company: '@remix-run',
    blog: 'https://kentcdodds.com',
    location: 'Salt Lake City, Utah, USA',
    email: null,
    hireable: null,
    bio: 'Improving the world with quality software · Husband, Father, Latter-day Saint, Teacher, OSS · @remix-run · TestingJavaScript.com · EpicReact.Dev · Be Kind',
    twitter_username: 'kentcdodds',
    public_repos: 631,
    public_gists: 236,
    followers: 22206,
    following: 42,
    created_at: '2012-03-04T22:32:01Z',
    updated_at: '2021-12-02T21:13:19Z',
  });
  const [repositories, setRepositories] = useState<TRepository[]>([]);

  useEffect(() => {
    const getAsyncUserAndRepositories = async () => {
      const { userExist, user, repositories } = await fetchGithubApi(username);
      setUserExist(userExist);
      setUser(user);
      setRepositories(repositories);
    };
    getAsyncUserAndRepositories();
  }, [username]);

  return [userExist, user, repositories];
};
