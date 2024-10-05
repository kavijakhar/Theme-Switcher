// src/App.js
import React from 'react';// Any other components you may have
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import UserProfileCard from './components/UserProfileCard';

function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
