import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function CartSummary() {
  return (
    <div>
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Sepet
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Asus Laptop</DropdownItem>
          <DropdownItem>Dell Laptop</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to='/cart'>Sepete git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}
