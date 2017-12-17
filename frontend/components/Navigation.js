import React from 'react';
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
        <NavItem>First Nav</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
