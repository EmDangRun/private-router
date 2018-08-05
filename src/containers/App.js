import React, { Fragment } from "react";
import { Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/public">Go to PublicPage</Link>
            </li>
            <li>
              <Link to="/protected">Go to ProtectedPage</Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
export default App;
