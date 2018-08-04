import React, { Fragment } from "react";
import { Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <Link to="/protected">Go to ProtectedPage</Link>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
export default App;
