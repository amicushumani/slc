import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
//ts-ignore
import ProductsComponent from './Pages/Products/index';
import Navbar from './Components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar></Navbar>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to affiliate</h1>
    </div>
  );
};

export default App;
