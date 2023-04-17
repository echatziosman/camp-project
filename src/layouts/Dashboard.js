import React from 'react';
import Categories from './Categories';
import { Col, Row } from 'reactstrap';
import { Route } from 'react-router';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';

export default function Dashboard() {
  return (
    <div>
      <Row>
        <Col xs='4'>
          <Categories />
        </Col>
        <Col xs='8'>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/products' component={ProductList} />
          <Route path='/products/:id' component={ProductDetail} />
          <Route path='/cart' component={CartDetail} />
        </Col>
      </Row>
    </div>
  );
}
