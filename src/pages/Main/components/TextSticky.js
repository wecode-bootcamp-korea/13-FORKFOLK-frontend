import React, { Component } from "react";
import "./TextSticky.scss";

class TextSticky extends Component {
  render() {
    const { subtitle, title, description, backgroundSrc } = this.props;
    return (
      <div
        className="TextSticky"
        style={{ background: `url(${backgroundSrc}) no-repeat center` }}
      >
        <div>
          <h3 className="quickSand">{subtitle}</h3>
          <p>{title}</p>
          <span>{description}</span>
        </div>
      </div>
    );
  }
}

export default TextSticky;
