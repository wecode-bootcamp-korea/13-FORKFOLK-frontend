import React, { Component } from "react";
import { API } from "../../config";
// import TitleBox from "../../TitleBox/TitleBox.js";
import CoreContents from "../../components/CoreContents/CoreContents";
// import SubContents from "../../components/CoreContents/CoreContents";
import "./Fashion.scss";

class Fashion extends Component {
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
        <CoreContents title={fashionItems.title} />

        {/* <div className="TitleBar">
            <Link to "https://www.kinfolk.com/stories/design/">
            Design </Link>    
            <h1>Fashion</h1>
            <Link to "https://www.kinfolk.com/stories/interiors/">
                INTERIORS</Link>
          </div>
          
          {/* {fashionItems.map((fashionItems)=>(
              <
          ))} */}
      </div>
    );
  }
}

export default Fashion;
