import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./pages/Account/Account";
import ContentDetail from "./pages/ContentDetail/ContentDetail";
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
          <Route exact path="/Account" component={Account} />
          <Route exact path="/contentDetail/:id" component={ContentDetail} />
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
 