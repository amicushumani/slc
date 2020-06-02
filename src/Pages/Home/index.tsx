import React from 'react';
import gql from 'graphql-tag';

import { useQuery } from '@apollo/react-hooks'

const Home = () => {
  const userNameQuery = gql`
    query{
      user {
        name
        access
      }
    }
  `
  const userName = 'Test User';
  const data = useQuery(userNameQuery);

  console.log('data = ', data);

  return (
    <div>
      <h1>Welcome back to task manager {userName}  </h1>
      <p> Task manager is an online store for all of your task related needs</p>
    </div>
  );

};

export default Home;
