import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./forkfolk.png";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      logoScale: 1,
    };
  }
  componentDidMount() {
    window.addEventListener("wheel", (e) => {
      console.log(e.wheelDelta);
      this.setState({ logoScale: 2 });
    });
  }
  render() {
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
              className="imgBox"
              style={{ transform: `scale(${this.state.logoScale})` }}
            >
              <img src={logo} alt="logo" />
            </div>
            <ul>
              <li>
                <button>
                  <i className="xi-search"></i>
                </button>
              </li>
              <li>
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main></main>
      </>
    );
  }
}

export default Header;
