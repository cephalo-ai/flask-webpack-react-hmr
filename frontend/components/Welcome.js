import React from 'react';
import { Jumbotron } from 'react-bootstrap/lib';

export const Welcome = () => (
  <Jumbotron>
    <div className="container">
      <h1>The wellio boilerplate</h1>
      <h3>Webpack + React 16 + Flask-Webpack + Docker</h3>
      <p>
        An example of combining Flask with React. See nav items above for
        various component examples.
      </p>
    </div>
  </Jumbotron>
);
