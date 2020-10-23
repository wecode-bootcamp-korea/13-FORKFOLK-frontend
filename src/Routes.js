import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from './pages/Account/Account';
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" component={Footer} /> */}
          <Route exact path="/Account" component={Account} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
