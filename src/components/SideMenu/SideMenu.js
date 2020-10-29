import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./SideMenu.scss";

class SideMenu extends Component {
  goToAccountOrLogout = () => {
    if (!localStorage.getItem("user-token")) {
      this.props.history.push("/Account");
      return;
    }
    localStorage.removeItem("user-token");
    this.props.isLoggedInHandler(false);
    this.props.history.push("/");
  };

  isLoggedIn = () => {
    if (localStorage.getItem("user-token")) {
      this.props.isLoggedInHandler(true);
    }
  };

  componentDidMount() {
    if (localStorage.getItem("user-token")) {
      this.props.isLoggedInHandler(true);
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className={`SideMenu ${this.props.visible && "visible"}`}>
        <div className="wrapper">
          <button
            className="closeSideMenu"
            onClick={this.props.sideMenuVisibilityHandler}
          >
            <span></span>
            <span></span>
          </button>
          <nav className="ebGaramond">
            <ul>
              <li>
                <Link to="/stories/1">Design</Link>
              </li>
              <li>
                <Link to="/stories/2">Fashion</Link>
              </li>
              <li>
                <Link to="/stories/3">Interiors</Link>
              </li>
              <li>
                <Link to="/stories/4">Arts &amp; Culture</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/">Current Issue</Link>
              </li>
            </ul>
          </nav>
          <ul>
            <li>
              <a href="https://www.facebook.com/kinfolkmag">FACEBOOK</a>
            </li>
            <li>
              <a href="https://twitter.com/kinfolkmag">TWITTER</a>
            </li>
            <li>
              <a href="http://instagram.com/kinfolk">INSTAGRAM</a>
            </li>
          </ul>
          <ul className="myPage">
            <li>
              <button onClick={this.goToAccountOrLogout}>
                {!isLoggedIn ? "Log In / Register" : "Log Out"}
              </button>
            </li>
            <li>
              <button>Subscribe</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SideMenu);
