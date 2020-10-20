import React, { Component } from "react";
import "./FlexItem.scss";

class FlexItem extends Component {
  render() {
    const { imgSrc, issueNumber, title, description } = this.props;
    return (
      <li className="FlexItem">
        <figure>
          <img src={imgSrc} alt="person" />
          <figcaption>ARTS &#38; CULTURE, ISSUE {issueNumber}</figcaption>
        </figure>
        <span>{title}</span>
        <p>{description}</p>
      </li>
    );
  }
}

export default FlexItem;
