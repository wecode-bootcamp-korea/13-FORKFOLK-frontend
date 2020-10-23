import React, { Component } from "react";
// import TitleBox from "../TitleBox/TitleBox.js";
// import CoreContents from "../CoreContents/CoreContents.js";
import SubContents from "../../components/CoreContents/CoreContents";
import "./Fashion.scss";

class Fashion extends Component {
  constructor() {
    super();
    this.state = {
      fashionItems: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Data/Fashiondata.json", {
      method: "GET",
    })
      .then((fashionData) => fashionData.json())
      .then((fashionData) =>
        this.setState({ fashionItems: fashionData.fashionItems })
      );
  }

  render() {
    const { fashionItems } = this.state;
    console.log("data>>>", fashionItems);
    return (
      <div className="FashionPage">
        {fashionItems.map((FashionItems) => (
          <SubContents
            id={fashionItems.id}
            imgSrc={fashionItems.imgSrc}
            issueNumber={fashionItems.issueNumber}
            title={fashionItems.title}
            description={fashionItems.description}
          />
        ))}
      </div>
    );
  }
}

export default Fashion;
