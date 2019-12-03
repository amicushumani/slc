import React, { Component } from 'react';

class ProductsContainer extends Component {
  render() {
    console.log('Products container props ', this.props);

    return (
      <div>
        <h1> Products Container </h1>;
        <ul>
          <li>
            <h2>First product title</h2>
            <p> First product description</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductsContainer;
