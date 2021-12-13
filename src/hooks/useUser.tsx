import { useState, useEffect } from 'react';

export const useUser = () => {
  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {}, []);
  return [user, repositories];
};
