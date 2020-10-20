import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from './pages/Account/Account';

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Account} />
          </Switch>
        </Router>
    );
  }
}

export default Routes;
