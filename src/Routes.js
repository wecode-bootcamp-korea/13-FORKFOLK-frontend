import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

import Account from "./pages/Account/Account";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Header} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Account" component={Account} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default Routes;
