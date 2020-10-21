import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MeetThePoetsItem.scss";

class MeetThePoetsItem extends Component {
  render() {
    const { imgSrc, issueNumber, name, description } = this.props.poet;
    return (
      <li className="MeetThePoetsItem">
        <figure>
          <img src={imgSrc} alt="profile" />
          <figcaption>ARTS & CULTRE, ISSUE {issueNumber}</figcaption>
        </figure>
        <span className="name">{name}</span>
        <span>{description}</span>
        <Link to="/">READ MORE</Link>
      </li>
    );
  }
}

export default MeetThePoetsItem;
