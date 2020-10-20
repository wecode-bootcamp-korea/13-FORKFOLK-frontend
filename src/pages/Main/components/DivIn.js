import React, { Component } from "react";
import FlexItemsList from "./FlexItemsList";

class DiveIn extends Component {
  constructor() {
    super();
    this.state = {
      DiveIn: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/FlexItemsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) =>
        this.setState({
          DiveIn: result.data.DiveIn,
        })
      );
  }
  render() {
    console.log("Parent", this.state.DiveIn);
    return (
      <div className="DiveIn">
        <FlexItemsList title="Dive In" contents={this.state.DiveIn} />
      </div>
    );
  }
}

export default DiveIn;
