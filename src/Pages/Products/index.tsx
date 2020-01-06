import React from 'react';
import ProductsContainer from '../../Containers/Products';

import './../Pages.css';

interface Props {
  userName: string;
  cards: object;
}

class ProductsPage extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const products = [
      {
        title: 'first title',
        id: 2,
        body: 'first body ',
        meta: {},
      },
      {
        title: 'second title',
        id: 3,
        body: 'second body',
        meta: {},
      },
    ];

    return (
      <div>
        <div className="page-title">
          <h1> Products </h1>
        </div>

        <ProductsContainer title={'All Products'} products={products} />
        <ProductsContainer title={'Featured Products'} products={products} />
      </div>
    );
  }
}

export default ProductsPage;
