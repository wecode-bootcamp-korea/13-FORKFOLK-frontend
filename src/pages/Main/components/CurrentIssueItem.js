import React, { Component } from "react";
import "./CurrentIssueItem.scss";
class CurrentIssueItem extends Component {
  render() {
    const { contents } = this.props;
    return (
      <img
        className="CurrentIssueItem"
        alt="current Issue"
        src={contents.imgSrc}
      />
    );
  }
}

export default CurrentIssueItem;
