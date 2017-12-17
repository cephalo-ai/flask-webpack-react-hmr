import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap/lib';

export const Navigation = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">wellio boilerplate</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem>
          <Link to="/component-state">Component State</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
