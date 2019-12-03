import React, { Component } from 'react';

interface ProductCardProps {
  title: string;
  isAvailable: boolean;
  body: string;
}
export default class ProductCard extends Component<ProductCardProps, {}> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    console.log('this.prop = ', this.props);
  }

  render() {
    const { title, body } = this.props;
    return (
      <div>
        <h1>{title}</h1>

        <div>{body}</div>
      </div>
    );
  }
}
