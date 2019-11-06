import React from 'react';
import ProductCard from '../../Components/ProductCard';

interface Props {
  userName: string;
}

class ProductsComponent extends React.Component<Props, {}> {
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
    return (
      <div>
        <h1> Products </h1>
        <p>Products Container</p>
        <div>
          <ProductCard
            title={'Best Product'}
            isAvailable={true}
            body={'This is a long product description'}
          />
        </div>
      </div>
    );
  }
}

export default ProductsComponent;
