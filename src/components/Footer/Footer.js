import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <ul>
          <li>© Kinfolk 2020</li>
          <li>
            <Link to="/">Terms</Link>
          </li>
          <li>
            <Link to="/">Subscribe</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.facebook.com/kinfolkmag">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/kinfolkmag">Twitter</a>
          </li>
          <li>
            <a href="http://instagram.com/kinfolk">Instagram</a>
          </li>
        </ul>
        <Link to="/">Website design &amp; Development by Six</Link>
      </footer>
    );
  }
}

export default Footer;
