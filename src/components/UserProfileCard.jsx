import React, { useContext } from 'react';
import './UserProfileCard.css';
import { ThemeContext } from '../context/ThemeContext';

const UserProfileCard = () => {
  const { theme, customTheme } = useContext(ThemeContext);


  const cardStyle = {
    backgroundColor: customTheme.background || (theme === 'light' ? '#fff' : '#333'),
    color: customTheme.textColor || (theme === 'light' ? '#000' : '#fff'),
  };

  return (
    <div className="user-profile-card" style={cardStyle}>
      <div className="user-details">
        <h2>John Doe</h2>
        <p>Email: johndoe@example.com</p>
        <p>Location: New York, USA</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
