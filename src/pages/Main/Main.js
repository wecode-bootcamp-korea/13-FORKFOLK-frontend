import React, { Component } from "react";
import "./Main.scss";
import FlexItemsList from "./components/FlexItemsList";
import CurrentIssue from "./components/CurrentIssue";
import MeetThePoets from "./components/MeetThePoets";
import Popular from "./components/Popular";
import ExpandedView from "./components/ExpandedView";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      logoScale: 8,
      wheelDeltaCount: 0,
      logoMarginTop: 400,
      ExpandedViewContents: [],
      ExtraordinaryInteriors: [],
      SelectedStories: [],
      DiveIn: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/FlexItemsData.json")
      .then((res) => res.json())
      .then((result) =>
        this.setState({
          ExtraordinaryInteriors: result.flexItemsData.ExtraordinaryInteriors,
          SelectedStories: result.flexItemsData.SelectedStories,
          DiveIn: result.flexItemsData.DiveIn,
        })
      );

    fetch("http://localhost:3000/Data/ExpandedViewData.json")
      .then((res) => res.json())
      .then((result) =>
        this.setState({ ExpandedViewContents: result.expandedView })
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
          return;
        }
        if (logoScale + wheelDeltaCount > 8 || logoMarginTop > 400) {
          this.setState({ logoScale: 8, logoMarginTop: 400 });
          return;
        }
        this.setState({
          logoScale: logoScale + wheelDeltaCount,
          logoMarginTop: logoMarginTop + wheelDeltaCount * 100,
        });
      });
    });
  }

  render() {
    const {
      ExpandedViewContents,
      SelectedStories,
      ExtraordinaryInteriors,
      DiveIn,
    } = this.state;
    return (
      <>
        {/* <Header
          logoScale={logoScale}
          logoMarginTop={logoMarginTop}
        /> */}
        <main className="Main">
          <div className="mainIssue">
            <span className="quickSand">ARTS &#38; CULTURE</span>
            <br />
            Navigate Nature
            <br />
            <span>How to orienteer outdoors</span>
          </div>
          {ExpandedViewContents && (
            <ExpandedView contents={ExpandedViewContents[0]} />
          )}
          <CurrentIssue />
          <FlexItemsList title="Selected Stories" contents={SelectedStories} />
          <FlexItemsList
            title="Extranordinary Interiors"
            contents={ExtraordinaryInteriors}
          />
          {/* <ExpandedView contents={ExpandedView[1]} /> */}
          <FlexItemsList title="Dive In" contents={DiveIn} />
          <MeetThePoets />
          <Popular />
          <div className="subscribe">
            <h3>Sign up to the Kinfolk newsletter</h3>
            <form>
              <input placeholder="YOUR EMAIL" />
              <button>SUBMIT</button>
            </form>
            <div>
              <input type="checkbox" id="" name="" />
              <label htmlFor="">
                I've read and accept the{" "}
                <a
                  href="https://www.kinfolk.com/terms-and-conditions/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  terms &#38; conditions
                </a>
              </label>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
