import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarBrand,
  NavbarToggler,
  NavbarText,
  Navbar,
} from 'reactstrap';
import CartSummary from './CartSummary';

export default function Navi() {
  return (
    <div>
      <Navbar color='light' expand='md' light container>
        <NavbarBrand href='/'>reactstrap</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
