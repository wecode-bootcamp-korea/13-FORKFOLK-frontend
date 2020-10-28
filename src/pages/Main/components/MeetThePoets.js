import React, { Component } from "react";
import MeetThePoetsItem from "./MeetThePoetsItem";
import { LOCAL_API_HJ } from "../../../config";
import "./MeetThePoets.scss";

class MeetThePoets extends Component {
  constructor() {
    super();
    this.state = {
      poets: [],
      visible: false,
    };
  }

  contentsVisibleHandler = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10600) {
        if (!this.state.visible) {
          this.setState({ visible: true });
        }
      }
    });
  };
  componentDidMount() {
    fetch(`${LOCAL_API_HJ}/Data/PoetsData.json`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => this.setState({ poets: result.poets }));
    this.contentsVisibleHandler();
  }
  render() {
    const { visible, poets } = this.state;
    return (
      <div className="MeetThePoets">
        <h3>Meet The Poets</h3>
        <ul className={visible ? "visible" : ""}>
          {poets.map((poet) => {
            return <MeetThePoetsItem key={poet.id} poet={poet} />;
          })}
        </ul>
      </div>
    );
  }
}
export default MeetThePoets;
