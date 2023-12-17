import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useSelector } from 'react-redux';

export default function Navi() {
  const { cartItems } = useSelector(state => state.cart); // useSelector fonksiyonu bizi store'daki sepete (cart) erişmemizi sağlıyor.

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push('/'); //UseHistory, navigasyon geçmişini tutuyor ve push dediğimizde bizi istenen yere götürüyor
  }

  function handleSingIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Navbar>
        <Nav>
          <NavItem>
            <Link to='/'>Anasayfa</Link>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Another Link</NavLink>
          </NavItem>
          {cartItems.length > 0 && <CartSummary />}
          {isAuthenticated ? (
            <SignedIn signOut={handleSignOut} bisey='1' />
          ) : (
            <SignedOut singIn={handleSingIn} />
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
