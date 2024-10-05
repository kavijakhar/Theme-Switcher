import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return theme;
};
