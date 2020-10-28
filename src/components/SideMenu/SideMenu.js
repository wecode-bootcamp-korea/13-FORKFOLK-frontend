import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./SideMenu.scss";

class SideMenu extends Component {
  goToAccount = () => {
    this.props.history.push("/Account");
  };

  render() {
    return (
      <div className={`SideMenu ${this.props.visible && "visible"}`}>
        <div className="wrapper">
          <button className="closeSideMenu" onClick={this.props.sideMenuVisibilityHandler}>
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
              <button onClick={this.goToAccount}>Log In / Register</button>
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
