import React, { Component } from "react";
import { API } from "../../config";
// import TitleBox from "../../TitleBox/TitleBox.js";
import CoreContents from "../../components/CoreContents/CoreContents";
// import SubContents from "../../components/CoreContents/CoreContents";
import "../Stories/Stories.scss";

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      fashionItems: [],
    };
  }

  componentDidMount() {
    fetch(`${API}Data/Fashiondata.json`)
      .then((fashionData) => fashionData.json())
      .then((fashionData) =>
        this.setState({ fashionItems: fashionData.fashionItems })
      );
  }

  render() {
    const { fashionItems } = this.state;

    return (
      <div className="FashionPage">
        <div className="TitleBox">
          <button>ALL STORIES</button>
          <h1>Design</h1>
          <button>FASHION</button>
        </div>
        <CoreContents title={fashionItems.title} />
      </div>
    );
  }
}

export default Stories;
