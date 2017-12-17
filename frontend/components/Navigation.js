import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
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
        <LinkContainer to="/component-state">
          <NavItem>Component State</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
