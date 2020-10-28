import React, { Component } from "react";
import "./Main.scss";
import FlexItemsList from "./components/FlexItemsList";
import CurrentIssue from "./components/CurrentIssue";
import MeetThePoets from "./components/MeetThePoets";
import Popular from "./components/Popular";
import ExpandedView from "./components/ExpandedView";
import FashionIssue from "./components/FashionIssue";
import TextSticky from "./components/TextSticky";
import ParallaxBackgroundContent from "./components/ParallaxBackgroundContent";
import { LOCAL_API_HJ } from "../../config";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      expandedViewContents: [],
      extraordinaryInteriors: [],
      selectedStories: [],
      diveIn: [],
    };
  }

  fetchData = async () => {
    const flexItemsApi = await fetch(`${LOCAL_API_HJ}/Data/FlexItemsData.json`);
    const expandedViewApi = await fetch(`${LOCAL_API_HJ}/Data/ExpandedViewData.json`);

    const flexItemsJson = await flexItemsApi.json();
    const expandedViewJson = await expandedViewApi.json();

    const selectedStories = flexItemsJson.flexItemsData.selectedStories;
    const extraordinaryInteriors = flexItemsJson.flexItemsData.extraordinaryInteriors;
    const diveIn = flexItemsJson.flexItemsData.diveIn;
    const expandedViewContents = expandedViewJson.expandedViewContents;

    this.setState({
      selectedStories,
      extraordinaryInteriors,
      diveIn,
      expandedViewContents,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { expandedViewContents, selectedStories, extraordinaryInteriors, diveIn } = this.state;

    return (
      <main className="Main">
        <TextSticky
          subtitle="ARTS &#38; CULTURE"
          title="Navigate to Nature"
          description="How to orienteer outdoors"
          backgroundSrc={
            "https://images.unsplash.com/photo-1422564030440-1ecae6e21f67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2601&q=80"
          }
        />
        {expandedViewContents.length && <ExpandedView contents={expandedViewContents[0]} />}
        <ParallaxBackgroundContent minusValue={3400} />
        <CurrentIssue />
        <FlexItemsList
          className="SelectedStories"
          title="Selected Stories"
          contents={selectedStories}
        />
        <TextSticky
          title="Kinfolk Dosan"
          description="A New Community in Seoul"
          backgroundSrc={
            "https://images.unsplash.com/photo-1581392766328-fb75f336149c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          }
        />
        <FashionIssue />
        <ParallaxBackgroundContent minusValue={8100} />
        <FlexItemsList
          className="ExtraordinaryInteriors"
          title="Extranordinary Interiors"
          contents={extraordinaryInteriors}
        />
        <TextSticky
          subtitle="DESIGN"
          title="DOWNSIZING"
          description="Unable to travel during lockdown, architects Salem Charabi &#38; Rasmus Stroyberg decided to recreate a favorite building."
          backgroundSrc={
            "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1756&q=80"
          }
        />
        {expandedViewContents.length && <ExpandedView contents={expandedViewContents[1]} />}
        <FlexItemsList className="DiveIn" title="Dive In" contents={diveIn} />
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
    );
  }
}

export default Main;
