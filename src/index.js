import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import * as Containers from "./containers";
import { Provider } from "react-redux";
import store from "./store";
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
const PrivateRoute = ({ component: Compenent, store, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Compenent {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute
          path="/protected"
          component={Containers.ProtectedPage}
          exact={true}
          store={store}
        />
        <Route path="/login" component={Containers.LoginPage} exact={true} />
        <Route path="/" component={Containers.App} exact={true} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
