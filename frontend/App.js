import React from 'react';
import { Counter, Foods, Image, Navigation, Welcome } from './components';

export const App = () => (
  <div className="app">
    <Navigation />
    <div className="container">
      <Welcome />
      <div>Webpack + React 16 + Flask-Webpack + Docker</div>
      <Counter />
      <Foods />
      <Image />
    </div>
  </div>
);
