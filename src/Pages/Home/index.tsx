import React from 'react';
import ProductsPage from '../Products';
import gql from 'graphql-tag';

const Home = () => {
  const userNameQuery = gql`
    user{
      name
      access
    }
  `
  const userName = 'Test User';

  return (
    <div>
      <h1>Welcome back to task manager {userName}  </h1>
      <p> Task manager is an online store for all of your task related needs</p>
    </div>
  );


export default Home;
