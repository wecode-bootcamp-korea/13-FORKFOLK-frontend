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
      logoMarginTop: 300,
      logoScale: 7,
      isMain: true,
      isLoggedIn: false,
      logoAni: true,
    };
  }

  isLoggedInHandler = (state) => {
    this.setState({ isLoggedIn: state });
  };

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

    if (scrollY >= 0 && scrollY < 300) {
      if (scrollY === 0) {
        this.setState({ logoScale: 7, logoMarginTop: 300 });
        return;
      }
      if (scrollY > 200) {
        this.setState({
          logoScale: 1,
          logoMarginTop: 0,
          logoAni: false,
        });
        return;
      }
      this.setState({
        logoScale: 7 - (scrollY / 50) * 1.5,
        logoMarginTop: 300 - (scrollY / 50) * 75,
        logoAni: true,
      });
    }
  };

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      this.setState({ logoScale: 7, logoMarginTop: 300 });
      window.addEventListener("scroll", this.logoScaleHandler, false);
    }
    if (this.props.location.pathname !== "/") {
      this.setState({ logoScale: 1, logoMarginTop: 0 });
    }
    localStorage.getItem("user-token") && this.setState({ isLoggedIn: true });
  }

  componentDidUpdate(prevProps, prevState) {
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
        if (window.scrollY > 200) {
          console.log("yalloo");
        }
        this.setState({
          logoScale: 7,
          logoMarginTop: 300,
          sideMenuVisible: false,
        });
        window.addEventListener("scroll", this.logoScaleHandler, false);
      }
      localStorage.getItem("user-token") && this.setState({ isLoggedIn: true });
    }
  }

  render() {
    const {
      sideMenuVisible,
      isLoggedIn,
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
              {isLoggedIn && (
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
          isLoggedInHandler={() => this.isLoggedInHandler()}
          isLoggedIn={isLoggedIn}
        />
      </>
    );
  }
}

export default withRouter(Header);
