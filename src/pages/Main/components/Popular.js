import React, { Component } from "react";
import "./Popular.scss";
import PopularContent from "./PopularContent";

class Popular extends Component {
  constructor() {
    super();
    this.state = {
      popularContents: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/PopularData.json", {
      method: "GET",
    })
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
