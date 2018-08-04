import React, { Fragment } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router-dom";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/protected" }
    };
    const { redirectToReferrer } = this.state;
    console.log(redirectToReferrer);
    if (redirectToReferrer) {
      return <Redirect to={from} />;
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
    setTimeout(this.props.login(), 3000);
  };
}
function mapStateToProps({ auth }) {
  console.log("auth", auth);
  return { auth };
}

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
