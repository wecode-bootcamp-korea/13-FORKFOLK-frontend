import React, { Component } from "react";
import "./SubContents.scss";

class SubContents extends Component {
  render() {
    const { id, imgSrc, issueNumber, title, description } = this.props;
    return (
      <div className="subComponents">
        <div className="subContentItem" key={id}>
          <img src={imgSrc} />
          <p>
            <span>ISSUE {issueNumber}</span>
          </p>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default SubContents;
