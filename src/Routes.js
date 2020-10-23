import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch></Switch>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default Routes;
