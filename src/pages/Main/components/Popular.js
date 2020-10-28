import React, { Component } from "react";
import PopularContent from "./PopularContent";
import { LOCAL_API_HJ } from "../../../config";
import "./Popular.scss";

class Popular extends Component {
  constructor() {
    super();
    this.state = {
      popularContents: [],
    };
  }
  componentDidMount() {
    fetch(`${LOCAL_API_HJ}/Data/PopularData.json`)
      .then((res) => res.json())
      .then((result) => this.setState({ popularContents: result.popular }));
  }
  render() {
    const { popularContents } = this.state;
    return (
      <div className="Popular">
        <h3>Popular</h3>
        <ul>
          {popularContents.map((content) => {
            return <PopularContent key={content.id} content={content} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Popular;
