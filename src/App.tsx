import React from 'react';
import './App.css';
import Navbar from './Containers/NavBar/Navbar';

import { gql } from 'apollo-boost';
import { Query, ApolloProvider } from 'react-apollo';

import ApolloClient from 'apollo-boost';
import { render } from 'enzyme';

const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql',
});

const productsQuery = gql`
  query {
    hello
  }
`;

const query = async () => {
  const b = await client.query({ query: productsQuery });
};
const App = () => {
  query();

  return <Navbar> </Navbar>;
};

export default App;
