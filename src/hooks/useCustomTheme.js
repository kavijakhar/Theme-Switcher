import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useCustomTheme = () => {
    const { theme, toggleTheme, setTheme } = useContext(ThemeContext);
  
    // Function to set custom colors
    const setCustomColors = (colors) => {
      const root = document.documentElement;
      Object.keys(colors).forEach((key) => {
        root.style.setProperty(`--${key}`, colors[key]);
      });
    };
  
    return { theme, toggleTheme, setTheme, setCustomColors };
  };
  