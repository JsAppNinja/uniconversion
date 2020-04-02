import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CheckConversion from 'components/CheckConversion';

const ControlledRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component {...props} />}
  />
);

const routes = () => (
  <Switch>
    <ControlledRoute
      path="/"
      component={CheckConversion}
    />
  </Switch>
);

export default routes;
