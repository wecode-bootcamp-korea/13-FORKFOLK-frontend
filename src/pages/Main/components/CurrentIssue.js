import React, { Component } from "react";

import CurrentIssueItem from "./CurrentIssueItem";
import { LOCAL_API_HJ } from "../../../config";
import "./CurrentIssue.scss";

class CurrentIssue extends Component {
  constructor() {
    super();
    this.state = {
      imageList: [],
      translateXValue: 0,
      isCursorPositionleft: false,
      visible: false,
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
    const isLeft = e.clientX < window.innerWidth / 2;
    this.setState({
      isCursorPositionleft: isLeft,
    });
  };

  isVisible = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2300) {
        if (!this.state.visible) {
          this.setState({ visible: true });
        }
      }
    });
  };

  componentDidMount() {
    fetch(`${LOCAL_API_HJ}/Data/CurrentIssueData.json`)
      .then((res) => res.json())
      .then((data) => this.setState({ imageList: data.currentIssueData }));
    this.isVisible();
  }

  render() {
    const {
      imageList,
      translateXValue,
      isCursorPositionleft,
      visible,
    } = this.state;
    return (
      <div
        className={`CurrentIssue ${isCursorPositionleft ? "left" : "right"}`}
        onMouseMove={(e) => this.cursorImageHandler(e)}
        onClick={(e) => this.imageSlideHandler(e)}
      >
        <h3>Current Issue</h3>
        <ul className={visible ? "sliderVisilbe" : ""}>
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

export default CurrentIssue;
