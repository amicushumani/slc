import App from './App';
import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient, { HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';

console.log('typeof app', typeof App);
// const withProvider = () => (
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
// );

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
