import React, { Component } from 'react';
import './../Containers.css';
import ProductCard from '../../Components/ProductCard';

interface Props {
  products: Array<Products>;
  title: string;
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
    const { title } = this.props;

    return (
      <div>
        <div className="container-header">
          <h1> {title} </h1>
        </div>

        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                <ProductCard
                  title={product.title}
                  body={product.body}
                  id={product.id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsContainer;
