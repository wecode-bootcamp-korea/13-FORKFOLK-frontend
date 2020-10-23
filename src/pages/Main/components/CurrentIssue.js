import React, { Component } from "react";

import CurrentIssueItem from "./CurrentIssueItem";
import "./CurrentIssue.scss";

class CurrendIssue extends Component {
  constructor() {
    super();
    this.state = {
      imageList: [],
      isCursorLeft: true,
    };
  }

  cursorImageHandler = (e) => {
    if (this.state.isCursorLeft === true) {
      if (e.clientX > window.innerWidth / 2) {
        this.setState({ isCursorLeft: false }, () => {
          console.log("right");
        });
      }
    }
    if (this.state.isCursorLeft === false) {
      if (e.clientX < window.innerWidth / 2) {
        this.setState({ isCursorLeft: true }, () => {
          console.log("left");
        });
      }
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/Data/CurrentIssueData.json")
      .then((res) => res.json())
      .then((data) => this.setState({ imageList: data.currentIssueData }));
  }

  render() {
    const { imageList, isCursorLeft } = this.state;
    return (
      <div
        className={`CurrentIssue ${isCursorLeft ? "left" : "right"}`}
        onMouseMove={(e) => this.cursorImageHandler(e)}
      >
        <h3>Current Issue</h3>
        <ul>
          {imageList.map((imageItem) => {
            return <CurrentIssueItem key={imageItem.id} contents={imageItem} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CurrendIssue;
