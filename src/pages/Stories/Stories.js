import React, { Component } from "react";
import { APIROOT } from "../../config";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import CoreContents from "../../components/CoreContents/CoreContents";
import "../Stories/Stories.scss";

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      mainItem: {},
      subItems: [],
      category: "Designdata",
    };
  }

  componentDidMount() {
    console.log(this.props);
    fetch(`${APIROOT}/Data/Designdata.json`)
      .then((Designdata) => Designdata.json())
      .then((Designdata) =>
        this.setState({
          mainItem: Designdata.mainItem,
          subItems: Designdata.subItems,
        })
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      fetch(`${APIROOT}/Data/${this.props.match.params.category}.json`)
        .then((Designdata) => Designdata.json())
        .then((Designdata) =>
          this.setState({
            mainItem: Designdata.mainItem,
            subItems: Designdata.subItems,
          })
        );
    }
  }

  render() {
    const { mainItem, subItems } = this.state;
    return (
      <div className="DesignPage">
        <div className="TitleBox">
          <button onClick={() => this.props.history.push(`/`)}>
            <VscChevronLeft color="#D17D74" />
            ALL STORIES
          </button>

          <h1>Design</h1>

          <button
            onClick={() =>
              this.props.history.push(
                `/stories/${+this.props.match.params.category + 1}`
              )
            }
          >
            FASHION
            <VscChevronRight color="#D17D74" />
          </button>
        </div>
        {!!subItems.length && (
          <CoreContents mainItem={mainItem} subItems={subItems} />
        )}
      </div>
    );
  }
}

export default Stories;
