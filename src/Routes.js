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
          <Route exact path="/Account" component={Account} />
          <Route exact path="/shop/:id" component={PreductDetail} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default Routes;
