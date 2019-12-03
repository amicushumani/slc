import React, { Component } from 'react';

import ProductCard from '../../Components/ProductCard';

interface Props {
  products: Array<Products>;
}

interface Products {
  title: string;
  body: string;
  id: number;
  meta?: object;
}

class ProductsContainer extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <h1> Products Container </h1>
        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                <ProductCard title={product.title} body={product.body} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsContainer;
