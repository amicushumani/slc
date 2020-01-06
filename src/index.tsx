import App from './App';
import * as serviceWorker from './serviceWorker';

import { HttpLink } from 'apollo-link-http';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

console.log('typeof app', typeof App);
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
