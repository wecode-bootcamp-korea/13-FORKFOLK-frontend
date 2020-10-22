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

  componentDidMount() {
    fetch("http://localhost:3000/Data/CoreContentsdata.json", {
      method: "GET",
    })
      .then((CoreContentsdata) => CoreContentsdata.json())
      .then((contentsData) =>
        this.setState({
          mainItem: contentsData.mainItem,
          subItems: contentsData.subItems,
        })
      );
  }

  render() {
    const { mainItem, subItems } = this.state;
    return (
      <div className="coreComponents">
        <div className="mainContents">
          <img src={mainItem.imgSrc} />
          <p>
            <span>{mainItem.subTitle}</span>
          </p>
          <h1>{mainItem.mainTitle}</h1>
          <p>{mainItem.description}</p>
        </div>
        <div className="subContents">
          {subItems.map((subItems) => (
            <SubContents
              id={subItems.id}
              imgSrc={subItems.imgSrc}
              issueNumber={subItems.issueNumber}
              title={subItems.title}
              description={subItems.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CoreContents;
