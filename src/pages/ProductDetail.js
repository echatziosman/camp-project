import React from 'react';
import { useState, useEffect } from 'react';
import ProductService from '../services/productService';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import {
  CardGroup,
  Card,
  CardBody,
  CardImg,
  CardText,
  Button,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';

export default function ProductDetail() {
  let { name } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();

    productService
      .getByProductName(name)
      .then(result => setProduct(result.data.data));
  }, []);

  return (
    <div>
      <CardGroup>
        <Card>
          <CardImg
            alt='Card image cap'
            src='https://picsum.photos/318/180'
            top
            width='100%'
          />
          <CardBody>
            <CardTitle tag='h5'> {product.productName} </CardTitle>
            <CardSubtitle className='mb-2 text-muted' tag='h6'>
              ---------------------
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button color='success'>Button</Button>
            <Button color='danger' style={{ marginLeft: '1em' }}>
              Button
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
