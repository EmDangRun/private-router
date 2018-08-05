import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
class ProtectedPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Chào mừng bạn đến Protected Page</h3>
        <p>Bạn muốn thoát khỏi hệ thống</p>
        <input type="button" value="Login" onClick={this.__handleLogout} />
      </React.Fragment>
    );
  }
  __handleLogout = () => {
  	this.props.logout();
  }
}
export default connect(
  null,
  { logout }
)(ProtectedPage);
