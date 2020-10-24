import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import SideMenu from "../SideMenu/SideMenu";
import logo from "./new folk.png";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      sideMenuVisible: false,
      shoppingListValid: false,
    };
  }

  goToMain = () => {
    this.props.history.push("/main");
  };

  goToShoppingList = () => {
    this.props.history.push("/cart");
  };

  sideMenuVisibilityHandler = () => {
    const { sideMenuVisible } = this.state;
    this.setState({ sideMenuVisible: !sideMenuVisible });
  };

  shoppingListButtonValidHandler = () => {
    localStorage.getItem("user-token") &&
      this.setState({ shoppingListValid: true });
  };

  componentDidMount() {
    this.shoppingListButtonValidHandler();
  }

  render() {
    const { logoScale, logoMarginTop } = this.props;
    const { sideMenuVisible, shoppingListValid } = this.state;
    return (
      <>
        <div className="Header">
          <nav>
            <ul>
              <li>
                <Link to="/">Subscribe</Link>
              </li>
              <li>
                <Link to="/">Issue</Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
            </ul>
            <div
              to="/"
              className="imgBox"
              style={{
                transform: `scale(${logoScale || 1})`,
                marginTop: `${logoMarginTop}px`,
              }}
            >
              <img src={logo} alt="logo" onClick={() => this.goToMain()} />
            </div>
            <ul>
              {shoppingListValid && (
                <li>
                  <button onClick={() => this.goToShoppingList()}>
                    <FaShoppingCart />
                  </button>
                </li>
              )}
              <li>
                <button>
                  <FaSearch />
                </button>
              </li>
              <li>
                <button
                  className="sideMenuButton"
                  onClick={() => this.sideMenuVisibilityHandler()}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <SideMenu
          visible={sideMenuVisible}
          sideMenuVisibilityHandler={() => this.sideMenuVisibilityHandler()}
        />
      </>
    );
  }
}

export default withRouter(Header);
