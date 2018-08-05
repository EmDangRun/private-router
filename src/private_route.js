import React from 'react';
import { connect } from "react-redux";
import { Route , Redirect } from "react-router";

const PrivateRoute = ({ component: Compenent, ...rest }) => {
  const { auth } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        auth.authenticated ? (
          <Compenent {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);