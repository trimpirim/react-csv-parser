import React from 'react';
import {
  BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom';

import Layout from './components/Layout';
import ParserContainer from './containers/ParserContainer';

const RouteWithMainContainer = (
  path,
  Comp,
) => ({
  path,
  exact: true,
  main: ({ backgroundColor, ...rest }) => (
    <main style={{ width: '100%' }}>
      <Comp {...rest} />
    </main>
  ),
});

export const routes = [
  RouteWithMainContainer(
    '/',
    ParserContainer,
  ),
];

const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        render={({ ...props }) => (
          <Layout route={route} {...props} />
        )}
      />
    ))}
  </Switch>
);

const Router = withRouter(Routes);

export default () => (
  <div>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>
);
