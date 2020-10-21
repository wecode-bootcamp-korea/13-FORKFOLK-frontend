import React, { Component } from "react";
import "./Main.scss";
import FlexItemsList from "./components/FlexItemsList";
import CurrentIssue from "./CurrendIssue";
import MeetThePoets from ".//MeetThePoets";
import Popular from "./Popular";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      logoScale: 8,
      wheelDeltaCount: 0,
      logoMarginTop: 400,
      ExtraordinaryInteriors: [],
      SelectedStories: [],
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
          ExtraordinaryInteriors: result.flexItemsData.ExtraordinaryInteriors,
          SelectedStories: result.flexItemsData.SelectedStories,
          DiveIn: result.flexItemsData.DiveIn,
        })
      );
    window.addEventListener("wheel", (e) => {
      const { logoScale, wheelDeltaCount, logoMarginTop } = this.state;
      const { wheelDelta } = e;
      if (window.pageYOffset > 1000) {
        return;
      }
      this.setState({ wheelDeltaCount: wheelDelta / 120 }, () => {
        if (logoScale + wheelDeltaCount < 1 || logoMarginTop < 0) {
          this.setState({ logoScale: 1, logoMarginTop: 0 });
        } else if (logoScale + wheelDeltaCount > 8 || logoMarginTop > 400) {
          this.setState({ logoScale: 8, logoMarginTop: 400 });
        } else {
          this.setState({
            logoScale: logoScale + wheelDeltaCount,
            logoMarginTop: logoMarginTop + wheelDeltaCount * 100,
          });
        }
      });
    });
  }
  render() {
    return (
      <>
        {/* <Header
          logoScale={this.state.logoScale}
          logoMarginTop={this.state.logoMarginTop}
        /> */}
        <main className="Main">
          <div className="mainIssue">
            <span className="quickSand">ARTS &#38; CULTURE</span>
            <br />
            Navigate Nature
            <br />
            <span>How to orienteer outdoors</span>
          </div>
          <CurrentIssue />
          <FlexItemsList
            title="Selected Stories"
            contents={this.state.SelectedStories}
          />
          <FlexItemsList
            title="Extranordinary Interiors"
            contents={this.state.ExtraordinaryInteriors}
          />
          <FlexItemsList title="Dive In" contents={this.state.DiveIn} />
          <MeetThePoets />
          <Popular />
        </main>
      </>
    );
  }
}

export default Main;
