import 'core-js';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Route,
  HashRouter as Router,
  Switch,
  Link 
} from 'react-router-dom';

import {
  HelloOne,
  HelloTwo
} from './components';

class App extends React.Component {
    render(): JSX.Element {
      return (
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/Two">Two</Link>
            </nav>
            <Switch>
              <Route exact path="/" component={HelloOne} />
              <Route exact path="/Two" component={HelloTwo} />
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
