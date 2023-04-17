import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleSignOut() {
    setIsAuthenticated(false);
  }

  function handleSingIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Navbar>
        <Nav>
          <NavItem>
            <NavLink href='#'>Link</NavLink>
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
