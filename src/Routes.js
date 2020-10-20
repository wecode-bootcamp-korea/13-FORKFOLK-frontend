import React from "react";
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={ProductDetail} />
          </Switch>
        </Router>
    );
  }
}

export default Routes;
