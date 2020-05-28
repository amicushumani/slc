import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ProductsContainer from '../../Containers/Products';
import './../Pages.css';

const productsQuery = gql(`
  query {
    myQuery {
      hello
    }
  }
`);

interface ProductsPageProps {
  userName: string;
  cards: object;
}

const ProductsPage = (props: ProductsPageProps) => {
  console.log('prouctsQuery', productsQuery);
  const result = useQuery(productsQuery);
  // console.log('data', result);
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
};

export default ProductsPage;
