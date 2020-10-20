import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./forkfolk.png";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      logoScale: 8,
      wheelDeltaCount: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("wheel", (e) => {
      const { wheelDelta } = e;
      this.setState({ wheelDeltaCount: wheelDelta / 120 }, () => {
        if (this.state.logoScale + this.state.wheelDeltaCount < 1) {
          this.setState({ logoScale: 1 });
        } else if (this.state.logoScale + this.state.wheelDeltaCount > 8) {
          this.setState({ logoScale: 8 });
        } else {
          this.setState({
            logoScale: this.state.logoScale + this.state.wheelDeltaCount,
          });
        }
      });
    });
  }
  render() {
    const { logoScale } = this.state;
    console.log(this.state.wheelDeltaCount);
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
              style={{ transform: `scale(${logoScale})` }}
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
