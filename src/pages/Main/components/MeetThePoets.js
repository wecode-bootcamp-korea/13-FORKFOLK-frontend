import React, { Component } from "react";
import MeetThePoetsItem from "./MeetThePoetsItem";
import "./MeetThePoets.scss";

class MeetThePoets extends Component {
  constructor() {
    super();
    this.state = {
      poets: [],
      visible: false,
    };
  }
  //isVisible={() => this.isVisible(10600, 12400)}
  isVisible = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10600 && window.scrollY < 12400) {
        this.setState({ visible: true });
      }
    });
  };
  componentDidMount() {
    fetch("http://localhost:3000/Data/PoetsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => this.setState({ poets: result.poets }));
    this.isVisible();
  }
  render() {
    return (
      <div className="MeetThePoets">
        <h3>Meet The Poets</h3>
        <ul className={this.state.visible ? "visible" : ""}>
          {this.state.poets.map((poet) => {
            return <MeetThePoetsItem key={poet.id} poet={poet} />;
          })}
        </ul>
      </div>
    );
  }
}
export default MeetThePoets;
