import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light';
  });

  const [customTheme, setCustomTheme] = useState(() => {
    const storedCustomTheme = localStorage.getItem('customTheme');
    return storedCustomTheme ? JSON.parse(storedCustomTheme) : { background: '', textColor: '' };
  });

  const [isCustomThemeApplied, setIsCustomThemeApplied] = useState(() => {
    const storedIsCustomThemeApplied = localStorage.getItem('isCustomThemeApplied');
    return storedIsCustomThemeApplied === 'true';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('customTheme', JSON.stringify(customTheme));
    localStorage.setItem('isCustomThemeApplied', isCustomThemeApplied);

    const background = isCustomThemeApplied
      ? customTheme.background
      : theme === 'light'
        ? '#ffffff'
        : '#333333';

    const textColor = isCustomThemeApplied
      ? customTheme.textColor
      : theme === 'light'
        ? '#000000'
        : '#ffffff';

    document.body.style.backgroundColor = background;
    document.body.style.color = textColor;
  }, [theme, customTheme, isCustomThemeApplied]);

  const toggleTheme = () => {
    setCustomTheme({ background: '', textColor: '' });
    setIsCustomThemeApplied(false);
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const applyCustomTheme = (bgColor="white", textColor="black") => {
    setCustomTheme({
      background: bgColor,
      textColor: textColor,
    });
    setIsCustomThemeApplied(true);
  };

  return (
    <ThemeContext.Provider value={{ theme, customTheme, isCustomThemeApplied, toggleTheme, applyCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
