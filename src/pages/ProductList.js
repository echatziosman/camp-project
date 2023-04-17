import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import ProductService from '../services/productService';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then(result => setProducts(result.data.data));
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td>{product.category.categoryName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
