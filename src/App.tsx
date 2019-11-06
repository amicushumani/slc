import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <div>
        <Link to="/"> Home </Link>
      </div>
      <div>
        <Link to="/products"> Products </Link>
      </div>
      <div>
        <Link to="/panes"> Panes </Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/panes"></Route>
      </Switch>
    </Router>
  );
};

const Navigation = () => {
  return <div> Router </div>;
};

const Home = () => {
  return <div>This is the home component</div>;
};

const Products = () => {
  return <div>This is the products component</div>;
};

export default App;
