import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoreContents from "./components/CoreContents/CoreContents";
import Fashion from "./pages/ Fashion/Fashion";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CoreContents} />
          <Route exact path="/fashion" component={Fashion} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
