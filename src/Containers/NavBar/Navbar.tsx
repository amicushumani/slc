import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../../Pages/Home/index';
import ProductsPage from '../../Pages/Products/index';

import './Navbar.css';

class Navbar extends Component {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
    console.log('NavBar Constructore ', this.state);
    console.log('Navar props', this.props);
  }

  render() {
    return (
      <Router>
        <div className="navbar-container">
          <div className="navbar-tab">
            <Link to="/"> Home </Link>
          </div>
          <div className="navbar-tab">
            <Link to="/products"> Products </Link>
          </div>
          <div className="navbar-tab">
            <Link to="/panes"> Panes </Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <ProductsPage
              userName={'someUsernamne'}
              cards={{ title: 'Products Title', body: 'some product body' }}
            />
          </Route>
          <Route exact path="/panes"></Route>
        </Switch>
      </Router>
    );
  }
}

export default Navbar;