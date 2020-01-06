import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Components.css';

interface Props {
  title: string;
  id: number;
  isAvailable?: boolean;
  body: string;
  meta?: object;
}

export default class ProductCard extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  handleClick(e: any) {
    console.log('this is ', this);
  }

  render() {
    const { id, title, body } = this.props;
    console.log('id = ', id);
    return (
      <div className="ProductCard" onClick={e => this.handleClick(e)}>
        <h1>{title}</h1>
        <div>{body}</div>
        <Link to="/panes/${id}"> Open {title} </Link>
      </div>
    );
  }
}
