import React, { Component } from "react";
import FlexItemsList from "./FlexItemsList";

class ExtraordinaryInteriors extends Component {
  constructor() {
    super();
    this.state = {
      ExtraordinaryInteriors: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/FlexItemsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) =>
        this.setState({
          ExtraordinaryInteriors: result.flexItemsData.ExtraordinaryInteriors,
        })
      );
  }
  render() {
    console.log("Parent", this.state.ExtraordinaryInteriors);
    return (
      <div className="ExtraordinaryInteriors">
        <FlexItemsList
          title="Selected Stories"
          contents={this.state.ExtraordinaryInteriors}
        />
      </div>
    );
  }
}

export default ExtraordinaryInteriors;
