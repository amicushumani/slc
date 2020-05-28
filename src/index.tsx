import React from 'react';

import App from './App';
import ApolloClient, { HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

const client = new ApolloClient({
  uri: 'https://localhost:8000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App>{'unkown'}</App>
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
