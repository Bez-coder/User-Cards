import React from 'react';

const UserCard = ({ name, email, age, bgColor }) => {

  const cardStyle = {
    backgroundColor: bgColor || '#f0f0f0', 
    padding: '20px',
    borderRadius: '10px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
