import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import * as Containers from "./containers";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from './private_route';
import './styles.css';

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute
          path="/protected"
          component={Containers.ProtectedPage}
          exact={true}
        />
        <Route path="/public" component={Containers.PublicPage} exact={true} />
        <Route path="/login" component={Containers.LoginPage} exact={true} />
        <Route path="/" component={Containers.App} exact={true} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
