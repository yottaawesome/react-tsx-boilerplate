import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, HashRouter as Router, Switch, Link } from 'react-router-dom';

import { Hello } from "./components/Hello";

class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <Switch>
              <Route exact path="/" component={Hello} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
