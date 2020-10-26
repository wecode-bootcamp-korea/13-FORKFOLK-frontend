import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

import Account from "./pages/Account/Account";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartList from "./pages/CartList/CartList";
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
          <Route exact path="/shop/" component={ProductList} />
          <Route exact path="/product-category/:category" component={ProductList} />
          <Route exact path="/shop/:id" component={ProductDetail} />
          <Route exact path="/cart/" component={CartList} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    )
  }
}

export default Routes;
 