import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap/lib';
import { Counter, Foods, Image } from './components';

const NavbarComponent = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">wellio boilerplate</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem>First Nav</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export const App = () => (
  <header>
    <NavbarComponent />
    <div className="container">
      <div>Webpack + React 16 + Flask-Webpack + Docker</div>
      <Counter />
      <Foods />
      <Image />
    </div>
  </header>
);
