import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, Navbar } from 'react-bootstrap/lib';

export const Navigation = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <LinkContainer to="/">
        <Navbar.Brand role="button">wellio boilerplate</Navbar.Brand>
      </LinkContainer>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/component-state">
          <NavItem>Component State</NavItem>
        </LinkContainer>
        <LinkContainer to="/api-call">
          <NavItem>API Call</NavItem>
        </LinkContainer>
        <LinkContainer to="/ui-interaction">
          <NavItem>UI Interaction</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
