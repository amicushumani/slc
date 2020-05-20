import React from 'react';

import ApolloClient, { HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';
const client = new ApolloClient({
  uri: 'https://localhost:8000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    {' '}
    <App />{' '}
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
