import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import CartList from "./pages/CartList/CartList";
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/shop/" component={ProductList} />
          <Route exact path="/cart/" component={CartList} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    )
  }
}

export default Routes;
