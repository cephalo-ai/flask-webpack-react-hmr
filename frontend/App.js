import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Counter, Foods, Home, Image, Navigation, Welcome } from './components';

export const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/component-state" component={Counter} />
    <Route path="/api-call" component={Foods} />
    <Route path="/ui-interaction" component={Image} />
  </Switch>
);
