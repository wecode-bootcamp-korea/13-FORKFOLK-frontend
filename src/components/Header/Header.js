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
      logoMarginTop: 0,
      logoScale: 1,
      isMain: true,
    };
  }

  goToMain = () => {
    this.props.history.push("/");
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

  logoScaleHandler = () => {
    const { scrollY } = window;
    console.log(scrollY);
    if (scrollY >= 0 && scrollY < 300) {
      if (scrollY === 0) {
        this.setState({ logoScale: 7, logoMarginTop: 300 });
        return;
      }
      if (scrollY >= 200) {
        this.setState({ logoScale: 1, logoMarginTop: 0 });
        return;
      }
      this.setState({
        logoScale: 7 - (scrollY / 50) * 1.5,
        logoMarginTop: 300 - (scrollY / 50) * 75,
      });
    }
  };

  componentDidMount() {
    this.shoppingListButtonValidHandler();
    if (this.props.location.pathname === "/") {
      this.setState({ logoScale: 7, logoMarginTop: 300 });
      window.addEventListener("scroll", this.logoScaleHandler, false);
    }
    if (this.props.location.pathname !== "/") {
      this.setState({ logoScale: 1, logoMarginTop: 0 });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.removeEventListener("scroll", this.logoScaleHandler, false);
      if (this.props.location.pathname !== "/") {
        this.setState({
          logoScale: 1,
          logoMarginTop: 0,
          sideMenuVisible: false,
        });
      }
      if (this.props.location.pathname === "/") {
        window.addEventListener("scroll", this.logoScaleHandler, false);
      }
    }
  }

  render() {
    const {
      sideMenuVisible,
      shoppingListValid,
      logoScale,
      logoMarginTop,
    } = this.state;
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
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
            <div
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
