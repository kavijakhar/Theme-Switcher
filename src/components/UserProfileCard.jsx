import React, { useContext } from 'react';
import './UserProfileCard.css';

const UserProfileCard = () => {
  return (
    <div className="user-profile-card">
      <div className="user-details">
        <h2>John Doe</h2>
        <p>Email: johndoe@example.com</p>
        <p>Location: New York, USA</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
