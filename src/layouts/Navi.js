import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';

export default function Navi() {
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
          <CartSummary />
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
