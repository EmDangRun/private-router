import React, { Fragment } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/protected" }
    };
    const { auth } = this.props;

    if(auth.isProcessing){
      return <div className="loader"></div>
    }

    if (auth.authenticated) {
      return <Redirect to={from}/>;
    }

    return (
      <Fragment>
        <form action="">
          <p>Bạn cần đăng nhập hệ thống</p>
          <input type="button" value="Login" onClick={this.__handleLogin} />
        </form>
      </Fragment>
    );
  }
  __handleLogin = () => {
      this.props.login();
  };
}

function mapStateToProps({ auth }) {
  console.log(auth);
  return { auth };
}

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
