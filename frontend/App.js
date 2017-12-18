import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, ComponentState, APICall, UIInteraction } from './components';

export const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/component-state" component={ComponentState} />
    <Route path="/api-call" component={APICall} />
    <Route path="/ui-interaction" component={UIInteraction} />
  </Switch>
);
