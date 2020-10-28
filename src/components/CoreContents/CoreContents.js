import React, { Component } from "react";
import SubContents from "./SubContents/SubContents";
import "./CoreContents.scss";

class CoreContents extends Component {
  constructor() {
    super();
    this.state = {
      mainItem: {},
      subItems: [],
    };
  }

  render() {
    const { mainItem, subItems } = this.props;

    return (
      <div className="coreComponents">
        <div className="mainContents">
          <img src={mainItem.image_url} />
          <p>
            <span>{mainItem.issue}</span>
          </p>
          <h1>{mainItem.title}</h1>
          <p>{mainItem.content}</p>
        </div>
        <div className="subContents">
          {subItems.map((subItems) => (
            <SubContents
              id={subItems.id}
              image_url={subItems.image_url}
              issue={subItems.issue}
              title={subItems.title}
              content={subItems.content}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CoreContents;
