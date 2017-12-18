import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from '.';

export const Page = ({ children }) => (
  <div className="app">
    <Navigation />
    <div className="container">{children}</div>
  </div>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};
