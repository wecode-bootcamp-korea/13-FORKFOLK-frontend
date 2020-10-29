import React, { Component } from "react";
import "./CurrentIssueItem.scss";
class CurrentIssueItem extends Component {
  render() {
    const { contents, translateXValue } = this.props;
    return (
      <img
        className="CurrentIssueItem"
        alt="current Issue"
        src={contents.imgSrc}
        style={{ transform: `translateX(${translateXValue}px)` }}
      />
    );
  }
}

export default CurrentIssueItem;
