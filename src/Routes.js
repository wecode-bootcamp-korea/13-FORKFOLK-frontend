import React from "react";
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from './pages/Account/Account';
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" component={Footer} /> */}
          <Route exact path="/Account" component={Account} />
          <Route exact path="/ProductDetail" component={PreductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
