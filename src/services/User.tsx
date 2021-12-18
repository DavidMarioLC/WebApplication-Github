export const fetchGithubApi = async (
  username?: string,
  type?: string,
  sort?: string
): Promise<any> => {
  const API_URL: string = 'https://api.github.com/users';
  const [userResponse, repositoriesResponse] = await Promise.all([
    fetch(`${API_URL}/${username}`),
    fetch(`${API_URL}/${username}/repos?type=${type}&sort=${sort}`),
  ]);

  const userExist = userResponse.ok;

  const user = await userResponse.json();
  const repositories = await repositoriesResponse.json();
  return { userExist, user, repositories };
};
