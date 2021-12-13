import { useState, useEffect } from 'react';

export const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (e.matches) {
          setTheme('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          setTheme('light');
          localStorage.setItem('theme', 'light');
        }
      });
  }, []);

  return [theme, toggleTheme];
};
