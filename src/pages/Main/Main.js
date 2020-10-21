import React, { Component } from "react";
import SelectedStories from "./components/SelectedStories";
import ExtraordinaryInteriors from "./components/ExtraordinaryInteriors";
import DiveIn from "./components/DivIn";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      logoScale: 8,
      wheelDeltaCount: 0,
      logoMarginTop: 400,
    };
  }
  componentDidMount() {
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
          <SelectedStories />
          <ExtraordinaryInteriors />
          <DiveIn />
        </main>
      </>
    );
  }
}

export default Main;
