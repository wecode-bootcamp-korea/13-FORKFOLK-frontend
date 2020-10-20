import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import logo from "./forkfolk.png";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      logoScale: 8,
      wheelDeltaCount: 0,
      sideMenuVisible: false,
    };
  }
  goToMain = () => {
    this.props.history.push("/");
  };
  sideMenuVisibilityHandler = (e) => {
    const { sideMenuVisible } = this.state;
    this.setState({ sideMenuVisible: !sideMenuVisible });
    console.log(e.target);
  };
  componentDidMount() {
    window.addEventListener("wheel", (e) => {
      const { logoScale, wheelDeltaCount } = this.state;
      const { wheelDelta } = e;
      if (window.pageYOffset > 1000) {
        return;
      }
      this.setState({ wheelDeltaCount: wheelDelta / 120 }, () => {
        if (logoScale + wheelDeltaCount < 1) {
          this.setState({ logoScale: 1 });
        } else if (logoScale + wheelDeltaCount > 8) {
          this.setState({ logoScale: 8 });
        } else {
          this.setState({
            logoScale: logoScale + wheelDeltaCount,
          });
        }
      });
    });
  }
  render() {
    const { logoScale, sideMenuVisible } = this.state;
    return (
      <>
        <header className="Header">
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
              style={{ transform: `scale(${logoScale})` }}
            >
              <img src={logo} alt="logo" onClick={this.goToMain} />
            </div>
            <ul>
              <li>
                <button>
                  <i className="xi-search"></i>
                </button>
              </li>
              <li>
                <button onClick={this.sideMenuVisibilityHandler}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <SideMenu
          visible={sideMenuVisible}
          sideMenuVisibilityHandler={this.sideMenuVisibilityHandler}
        />
        <main></main>
      </>
    );
  }
}

export default withRouter(Header);
