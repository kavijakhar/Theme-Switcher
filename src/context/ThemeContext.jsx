import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [customTheme, setCustomTheme] = useState({
    background: '',
    textColor: '',
  });
  const [isCustomThemeApplied, setIsCustomThemeApplied] = useState(false);

  const toggleTheme = () => {
    setCustomTheme({ background: '', textColor: '' });
    setIsCustomThemeApplied(false);
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const applyCustomTheme = (bgColor, textColor) => {
    setCustomTheme({
      background: bgColor,
      textColor: textColor,
    });
    setIsCustomThemeApplied(true);
  };

  useEffect(() => {
    const background = isCustomThemeApplied ? customTheme.background : theme === 'light' ? '#ffffff' : '#333333';
    const textColor = isCustomThemeApplied ? customTheme.textColor : theme === 'light' ? '#000000' : '#ffffff';

    document.body.style.backgroundColor = background;
    document.body.style.color = textColor;
  }, [theme, customTheme, isCustomThemeApplied]);

  return (
    <ThemeContext.Provider value={{ theme, customTheme, isCustomThemeApplied, toggleTheme, applyCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
