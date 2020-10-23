import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./pages/Account/Account";
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Account" component={Account} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default Routes;
