import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SideMenu.scss";

class SideMenu extends Component {
  render() {
    return (
      <div className={`SideMenu ${this.props.visible && "visible"}`}>
        <div className="wrapper">
          <button onClick={this.props.sideMenuVisibilityHandler}>
            <span></span>
            <span></span>
          </button>
          <nav>
            <ul>
              <li>
                <Link to="/">Design</Link>
              </li>
              <li>
                <Link to="/">Fashion</Link>
              </li>
              <li>
                <Link to="/">Interiors</Link>
              </li>
              <li>
                <Link to="/">Arts &amp; Culture</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">Shop</Link>
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
              <Link to="/">Log In / Register</Link>
            </li>
            <li>
              <Link to="/">Subscribe</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
