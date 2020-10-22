import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import SideMenu from "../SideMenu/SideMenu";
import logo from "./new folk.png";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      sideMenuVisible: false,
    };
  }

  goToMain = () => {
    this.props.history.push("/main");
  };

  sideMenuVisibilityHandler = () => {
    const { sideMenuVisible } = this.state;
    this.setState({ sideMenuVisible: !sideMenuVisible });
  };

  render() {
    const { logoScale, logoMarginTop } = this.props;
    const { sideMenuVisible } = this.state;
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
              <img src={logo} alt="logo" onClick={this.goToMain} />
            </div>
            <ul>
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
          sideMenuVisibilityHandler={this.sideMenuVisibilityHandler}
        />
      </>
    );
  }
}

export default withRouter(Header);
