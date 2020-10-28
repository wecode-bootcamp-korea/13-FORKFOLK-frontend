import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PopularContent.scss";

class PopularContent extends Component {
  render() {
    const { issue, imgSrc, title, description } = this.props.content;
    return (
      <li className="PopularContent">
        <Link to="/">
          <img src={imgSrc} alt="popular" />
        </Link>
        <div>
          <span>{issue}</span>
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </li>
    );
  }
}

export default PopularContent;
