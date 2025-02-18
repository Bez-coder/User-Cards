import React from 'react';
import UserCard from './UserCard'; // Import the UserCard component

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <UserCard 
        name="Maya thomas" 
        email="maya@example.com" 
        age={23} 
        bgColor="#ffebcd" 
      />
      <UserCard 
        name="Amaziah Dagim" 
        email="amazi@example.com" 
        age={25} 
        bgColor="#e6e6fa" 
      />
    </div>
  );
};

export default App;
