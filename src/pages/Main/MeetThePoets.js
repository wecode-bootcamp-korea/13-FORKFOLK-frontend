import React, { Component } from "react";
import MeetThePoetsItem from "./components/MeetThePoetsItem";
import "./MeetThePoets.scss";

class MeetThePoets extends Component {
  constructor() {
    super();
    this.state = {
      poets: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/PoetsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => this.setState({ poets: result.poets }));
  }
  render() {
    return (
      <div className="MeetThePoets">
        <h3>Meet The Poets</h3>
        <ul>
          {this.state.poets.map((poet) => {
            return <MeetThePoetsItem key={poet.id} poet={poet} />;
          })}
        </ul>
      </div>
    );
  }
}
export default MeetThePoets;
