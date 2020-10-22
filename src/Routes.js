import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch></Switch>
        <Route path="/" component={Header} />
      </Router>
    );
  }
}

export default Routes;
