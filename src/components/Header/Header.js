import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li className="depth01">
              <ul className="depth02">
                <li>Subscribe</li>
                <li>Issue 37</li>
                <li>Shop</li>
              </ul>
            </li>
            <li>
              <img src={"./images/forkfolk.jpg"} />
            </li>
            <li>
              <ul>
                <li>
                  <i className="xi-search"></i>
                </li>
                <li>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="sideMenu"></div>
      </header>
    );
  }
}

export default Header;
