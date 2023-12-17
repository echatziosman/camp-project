import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
} from 'reactstrap';

export default function CartSummary() {
  const { cartItems } = useSelector(state => state.cart); // useSelector fonksiyonu bizi store'daki sepete (cart) erişmemizi sağlıyor.
  return (
    <div>
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Sepet
        </DropdownToggle>
        <DropdownMenu>
          {cartItems.map(cartItem => (
            <DropdownItem>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to='/cart'>Sepete git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}
