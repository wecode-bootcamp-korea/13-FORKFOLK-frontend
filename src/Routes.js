import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import CartList from "./pages/CartList/CartList";
import WishList from "./pages/WishList/WishList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/shop/" component={ProductList} />
          <Route exact path="/cart/" component={CartList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
