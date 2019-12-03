import React, { Component } from 'react';
import './Components.css';

interface ProductCardProps {
  title: string;
  isAvailable?: boolean;
  body: string;
  meta?: object;
}
export default class ProductCard extends Component<ProductCardProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { title, body } = this.props;
    return (
      <div className="ProductCard">
        <h1>{title}</h1>
        <div>{body}</div>
      </div>
    );
  }
}
