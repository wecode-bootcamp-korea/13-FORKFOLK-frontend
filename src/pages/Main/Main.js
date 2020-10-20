import React, { Component } from "react";
import SelectedStories from "./components/SelectedStories";
import ExtraordinaryInteriors from "./components/ExtraordinaryInteriors";
import DiveIn from "./components/DivIn";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <div className="mainIssue">
          <span className="quickSand">ARTS &#38; CULTURE</span>
          <br />
          Navigate Nature
          <br />
          <span>How to orienteer outdoors</span>
        </div>
        <SelectedStories />
        <ExtraordinaryInteriors />
        <DiveIn />
      </main>
    );
  }
}

export default Main;
