import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import UserProfileCard from './UserProfileCard';

const ThemeSwitcher = () => {
    const { toggleTheme, applyCustomTheme, theme, customTheme, isCustomThemeApplied } = useContext(ThemeContext);
    const [bgColor, setBgColor] = useState('');
    const [textColor, setTextColor] = useState('');

    const handleCustomTheme = () => {
        applyCustomTheme(bgColor, textColor);
    };

    const switcherStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: isCustomThemeApplied ? customTheme.background : theme === 'light' ? '#f0f0f0' : '#444',
        color: isCustomThemeApplied ? customTheme.textColor : theme === 'light' ? '#000' : '#fff',
        padding: '2rem',
        borderRadius: '8px',
        margin: '0 auto',
        width: '80%',
    };

    return (
        <div style={switcherStyles}>
            <h2 style={{ marginBottom: '1rem' }}>Theme Switcher</h2>
            <h3>Current Theme: {isCustomThemeApplied ? 'Custom' : theme}</h3>

            <div className="form-check form-switch mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="themeToggleSwitch"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <label className="form-check-label" htmlFor="themeToggleSwitch">
                    Toggle Theme
                </label>
            </div>

            <h3>Customize Theme</h3>

            <div className="mb-3">
                <label>Background color</label>
                <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label>Text color</label>
                <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="form-control"
                />
            </div>

            <button onClick={handleCustomTheme} className="btn btn-success mb-3">
                Apply Custom Theme
            </button>

            <div style={{ display: 'flex' }}>
                <UserProfileCard />
                <UserProfileCard />
                <UserProfileCard />
            </div>
        </div>
    );
};

export default ThemeSwitcher;
