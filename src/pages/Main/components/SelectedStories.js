import React, { Component } from "react";
import FlexItemsList from "./FlexItemsList";

class SelectedStories extends Component {
  constructor() {
    super();
    this.state = {
      selectedStories: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/FlexItemsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) =>
        this.setState({ selectedStories: result.flexItemsData.selectedStories })
      );
  }
  render() {
    console.log("Parent", this.state.selectedStories);
    return (
      <div className="SelectedStories">
        <FlexItemsList
          title="Extraordinary Interiors"
          contents={this.state.selectedStories}
        />
      </div>
    );
  }
}

export default SelectedStories;
