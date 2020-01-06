import React from 'react';
import './App.css';
import Navbar from './Containers/NavBar/Navbar';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const productsQuery = gql`
  query {
    hello
  }
`;

const App = () => (
  // <Query query={productsQuery}>
  //   {({ loading, error, data }: any) => {
  //     console.log('error', error);
  //     if (loading) return <div>Loading...</div>;
  //     if (error) return <div>Error :(</div>;

  //     return <div> data.hello </div>;
  //   }}
  // </Query>
  <div>
    <div>
      <Navbar> </Navbar>
    </div>
  </div>
);

console.log('typeof app', typeof App);

export default App;
