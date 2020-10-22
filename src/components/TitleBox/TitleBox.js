import React, { Component } from "react";
import "./TitleBox.scss";

class TitleBox extends Component {
  constructor() {
    super();
    this.state = {
      TitleBox: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Data/TitleBoxdata.json", {
      method: "GET",
    })
      .then((TitleBoxdata) => TitleBoxdata.json())
      .then((TitleData) =>
        this.setState({ TitleContents: TitleBoxdata.TitleContents })
      );
  }

  render() {
    return (
      <div>
        <p></p>
      </div>
    );
  }
}

export default TitleBox;
