import React, { Component } from "react";
import { APIROOT, TitleContents } from "../../config";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import CoreContents from "../../components/CoreContents/CoreContents";
import SubContents from "../../components/CoreContents/SubContents/SubContents";
import "../Stories/Stories.scss";

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      mainItem: {},
      subItems: [],
      recycle_stories: [],
      category: "Designdata",
    };
  }

  componentDidMount() {
    fetch(`http://10.58.2.235:8000/stories/${this.props.match.params.category}`)
      .then((Designdata) => Designdata.json())
      .then((Designdata) =>
        this.setState({
          mainItem: Designdata.story_list[0],
          subItems: Designdata.story_list.slice(1),
          recycleItems: Designdata.recycle_stories,
        })
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      fetch(
        `http://10.58.2.235:8000/stories/${this.props.match.params.category}`
      )
        .then((Designdata) => Designdata.json())
        .then((Designdata) =>
          this.setState({
            mainItem: Designdata.story_list[0],
            subItems: Designdata.story_list.slice(1),
            recycleItems: Designdata.recycle_stories,
          })
        );
    }
  }

  render() {
    const { mainItem, subItems, recycleItems } = this.state;
    let lastPage = this.props.match.params.category === "4";

    return (
      <div className="DesignPage">
        <div className="TitleBox">
          <button
            onClick={() => {
              this.props.match.params.category === "1"
                ? this.props.history.push(`/stories/4`)
                : this.props.history.push(
                    `/stories/${+this.props.match.params.category - 1}`
                  );
            }}
          >
            <VscChevronLeft color="#D17D74" />
            {TitleContents[this.props.match.params.category - 1].prevBtn}
          </button>
          <h1>{TitleContents[this.props.match.params.category - 1].title}</h1>
          <button
            onClick={() =>
              lastPage
                ? this.props.history.push(`/stories/1`)
                : this.props.history.push(
                    `/stories/${+this.props.match.params.category + 1}`
                  )
            }
          >
            {lastPage
              ? TitleContents[0].nextBtn
              : TitleContents[this.props.match.params.category - 1].nextBtn}
            <VscChevronRight color="#D17D74" />
          </button>
        </div>
        <div className="CoreStories">
          <CoreContents mainItem={mainItem} subItems={subItems} />
        </div>

        {recycleItems && (
          <div className="recycleItems">
            {recycleItems.map((recycleItems) => (
              <SubContents
                id={recycleItems.id}
                image_url={recycleItems.image_url}
                issue={recycleItems.issue}
                title={recycleItems.title}
                content={recycleItems.content}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Stories;
