import React, { useState, useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import ProductService from '../services/productService';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { toast, ToastContainer } from 'react-toastify';

export default function ProductList() {
  const dispatch = useDispatch(); // action'u getirmemizi sağlar

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then(result => setProducts(result.data.data));
  }, []);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi!`);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Birim Fiyatı</th>
            <th>Stok Adedi</th>
            <th>Açıklama</th>
            <th>Kategori</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <Link to={`/products/${product.productName}`}>
                  {product.productName}
                </Link>
              </td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td>{product.category.categoryName}</td>
              <td>
                <Button onClick={() => handleAddToCart(product)}>
                  Sepete ekle
                </Button>
                <ToastContainer />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
