import React from 'react';
import ProductCard from '../../Components/ProductCard';
import ProductsContainer from '../../Containers/Products/ProdcutsContainer';

import './../Pages.css';

interface Props {
  userName: string;
  cards: object;
}

class ProductsPage extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
    console.log('ProductsComponent props = ', props);
    this.state = { productCount: 0 };
    console.log('this.state = ', this.state);
  }

  componentDidMount() {
    console.log('componentDidMount ProductsComponent', this);
  }

  render() {
    const { cards } = this.props;
    console.log('cards', typeof cards);
    console.log('cards', cards);
    const products = [
      {
        title: 'first title',
        body: 'first body ',
        id: 2,
        meta: {},
      },
      {
        title: 'second title',
        body: 'second body',
        id: 3,
        meta: {},
      },
    ];
    console.log('first product', typeof products);

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
