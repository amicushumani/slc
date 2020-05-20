import React from 'react';
import ProductsPage from '../Products';

const Home: React.FC = () => {
  const userName = 'Test User';

  return (
    <div>
      <h1>Welcome back to task manager {userName} </h1>
      <p> Task manager is an online store for all of your task related needs</p>
    </div>
  );
};

export default Home;
