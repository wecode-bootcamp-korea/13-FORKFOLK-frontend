import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SubContents.scss";

class SubContents extends Component {
  render() {
    const { id, image_url, issue, title, content } = this.props;
    return (
      <div className="subComponents">
        <div className="subContentItem" key={id}>
          <Link to={`/contentDetail/${id}`}>
            <img src={image_url} />
          </Link>
          <p>
            <span>{issue}</span>
          </p>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default SubContents;
