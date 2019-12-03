import React, { Component } from 'react';

interface Props {
  products: Array<Products>;
}

interface Products {
  title: string;
  body: string;
  meta: object;
}

class ProductsContainer extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log('Products container props ', this.props);
    const products = this.props.products;
    console.log(typeof products);

    return (
      <div>
        <h1> Products Container </h1>
        <ul>
          {products.map((product, index) => {
            return (
              <li>
                <h2>{product.title}</h2>
                <p>{product.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsContainer;
