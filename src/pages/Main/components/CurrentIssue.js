import React, { Component } from "react";

import CurrentIssueItem from "./CurrentIssueItem";
import "./CurrentIssue.scss";

class CurrendIssue extends Component {
  constructor() {
    super();
    this.state = {
      imageList: [],
      translateXValue: 0,
      isCursorPositionleft: false,
    };
  }

  imageSlideHandler = (e) => {
    const { translateXValue } = this.state;
    if (e.clientX < window.innerWidth / 2) {
      if (translateXValue >= 0) {
        return;
      }
      this.setState({ translateXValue: translateXValue + 900 });
    }
    if (e.clientX > window.innerWidth / 2) {
      if (translateXValue <= -3900) {
        return;
      }
      this.setState({ translateXValue: translateXValue - 900 });
    }
  };

  cursorImageHandler = (e) => {
    if (e.clientX < window.innerWidth / 2) {
      this.setState({
        isCursorPositionleft: true,
      });
    }
    if (e.clientX > window.innerWidth / 2) {
      this.setState({
        isCursorPositionleft: false,
      });
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/Data/CurrentIssueData.json")
      .then((res) => res.json())
      .then((data) => this.setState({ imageList: data.currentIssueData }));
  }

  render() {
    const { imageList, translateXValue, isCursorPositionleft } = this.state;
    return (
      <div
        className={`CurrentIssue ${isCursorPositionleft ? "left" : "right"}`}
        onMouseMove={(e) => this.cursorImageHandler(e)}
        onClick={(e) => this.imageSlideHandler(e)}
      >
        <h3>Current Issue</h3>
        <ul>
          {imageList.map((imageItem) => {
            return (
              <CurrentIssueItem
                key={imageItem.id}
                contents={imageItem}
                translateXValue={translateXValue}
              />
            );
          })}
        </ul>
        <span>
          From wilderness to windowsill: Plant roots in the world around you
        </span>
        <button className="quickSand">BUY NOW</button>
      </div>
    );
  }
}

export default CurrendIssue;
