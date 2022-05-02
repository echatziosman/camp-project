import React from 'react';
import Categories from './Categories';
import { Row } from 'reactstrap';
import ProductList from '../pages/ProductList';

export default function Dashboard() {
  return (
    <div>
      <Row md={4}>
        <Categories />
      </Row>
      <ProductList />
    </div>
  );
}
