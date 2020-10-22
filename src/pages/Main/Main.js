import React, { Component } from "react";
import "./Main.scss";
import FlexItemsList from "./components/FlexItemsList";
import CurrentIssue from "./components/CurrentIssue";
import MeetThePoets from "./components/MeetThePoets";
import Popular from "./components/Popular";
import ExpandedView from "./components/ExpandedView";
import FashionIssue from "./components/FashionIssue";
import TextSticky from "./components/TextSticky";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      logoScale: 8,
      wheelDeltaCount: 0,
      logoMarginTop: 400,
      expandedViewContents: [],
      extraordinaryInteriors: [],
      selectedStories: [],
      diveIn: [],
    };
  }
  fetchData = async () => {
    const fetch1 = await fetch("http://localhost:3000/Data/FlexItemsData.json");
    const fetch2 = await fetch(
      "http://localhost:3000/Data/ExpandedViewData.json"
    );
    const json1 = await fetch1.json();
    const json2 = await fetch2.json();
    const selectedStories = json1.flexItemsData.selectedStories;
    const extraordinaryInteriors = json1.flexItemsData.extraordinaryInteriors;
    const diveIn = json1.flexItemsData.diveIn;
    const expandedViewContents = json2.expandedViewContents;

    this.setState({
      selectedStories,
      extraordinaryInteriors,
      diveIn,
      expandedViewContents,
    });
  };

  componentDidMount() {
    this.fetchData();

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
      expandedViewContents,
      selectedStories,
      extraordinaryInteriors,
      diveIn,
    } = this.state;
    return (
      <>
        {/* <Header
          logoScale={logoScale}
          logoMarginTop={logoMarginTop}
        /> */}
        <main className="Main">
          <TextSticky
            subtitle="ARTS &#38; CULTURE"
            title="Navigate to Nature"
            description="How to orienteer outdoors"
            backgroundSrc={
              "https://images.unsplash.com/photo-1422564030440-1ecae6e21f67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2601&q=80"
            }
          />
          {expandedViewContents.length && (
            <ExpandedView contents={expandedViewContents[0]} />
          )}
          <CurrentIssue />
          <FlexItemsList title="Selected Stories" contents={selectedStories} />
          <TextSticky
            title="Kinfolk Dosan"
            description="A New Community in Seoul"
            backgroundSrc={
              "https://images.unsplash.com/photo-1581392766328-fb75f336149c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            }
          />
          <FashionIssue />
          <TextSticky
            subtitle="DESIGN"
            title="DOWNSIZING"
            description="Unable to travel during lockdown, architects Salem Charabi &#38; Rasmus Stroyberg decided to recreate a favorite building."
            backgroundSrc={
              "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1756&q=80"
            }
          />
          <FlexItemsList
            title="Extranordinary Interiors"
            contents={extraordinaryInteriors}
          />
          {expandedViewContents.length && (
            <ExpandedView contents={expandedViewContents[1]} />
          )}
          <FlexItemsList title="Dive In" contents={diveIn} />
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
