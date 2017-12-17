import React from 'react';
import { Navigation, Welcome } from '.';

export const Home = () => (
  <div className="app">
    <Navigation />
    <div className="container">
      <Welcome />
    </div>
  </div>
);
