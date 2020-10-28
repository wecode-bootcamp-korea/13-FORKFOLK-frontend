import React, { Component } from "react";
import "./FlexItem.scss";

class FlexItem extends Component {
  render() {
    const { imgSrc, issueNumber, title, description } = this.props;
    return (
      <li className="FlexItem">
        <div>
          <img src={imgSrc} alt="person" />
        </div>
        <span className="issue quickSand">
          ARTS &#38; CULTURE, ISSUE {issueNumber}
        </span>
        <span className="quickSand">{title}</span>
        <p>{description}</p>
      </li>
    );
  }
}

export default FlexItem;
