import React from 'react';
import Async from 'react-code-splitting';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components';

const ComponentState = () => (
  <Async load={import('./components/ComponentState')} />
);
const APICall = () => <Async load={import('./components/APICall')} />;
const UIInteraction = () => (
  <Async load={import('./components/UIInteraction')} />
);

export const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/component-state" component={ComponentState} />
    <Route path="/api-call" component={APICall} />
    <Route path="/ui-interaction" component={UIInteraction} />
  </Switch>
);
