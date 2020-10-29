import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Stories from "./pages/Stories/Stories";
import Account from "./pages/Account/Account";
import ContentDetail from "./pages/ContentDetail/ContentDetail";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartList from "./pages/CartList/CartList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route component={Header} />
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/" component={Main} />
          <Route exact path="/stories/:category" component={Stories} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/contentDetail/:id" component={ContentDetail} />
          <Route exact path="/shop/" component={ProductList} />
          <Route exact path="/product-category/:category" component={ProductList} />
          <Route exact path="/shop/:id" component={ProductDetail} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/order" component={CartList} />
        </Switch>
        <Route component={Footer} />
      </Router>
    );
  }
}

export default Routes;
