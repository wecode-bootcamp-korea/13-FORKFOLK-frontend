import React, { Component } from "react";
import { APIROOT, TitleContents } from "../../config";
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
    fetch(`${APIROOT}/Data/Designdata.json`)
      .then((Designdata) => Designdata.json())
      .then((Designdata) =>
        this.setState({
          mainItem: Designdata.story_list[0],
          subItems: Designdata.story_list.slice(1),
        })
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      fetch(`${APIROOT}/Data/${this.props.match.params.category}.json`)
        .then((Designdata) => Designdata.json())
        .then((Designdata) =>
          this.setState({
            mainItem: Designdata.story_list[0],
            subItems: Designdata.story_list.slice(0),
          })
        );
    }
  }

  render() {
    const { mainItem, subItems } = this.state;
    // console.log("are you there????", mainItem);
    console.log(this.props.match.params.category);

    //여기서부터 페이지네이션 식

    // const LIMIT = 18;
    // const Main: NextPage<Props> = ({best:[],recommend:[]})=>
    // { const [bestData,setBestData]= useState(best);
    //   const [offset, setOffset] = useState(initialState:0);
    //   const getMoreBest = async() => {
    //     const nestOffset = LIMIT + offset;

    //     const bestResponse = await fetch (input: `http://어쩌구저쩌구 ${}`)
    //     const bestJson = await bestResponse.json();

    //     setBestData(bestJson.data);
    //     setOffset(nextOffset);

    //   };

    // }

    // 페이지네이션 식 끝!!!!!!!!!!!!!!

    return (
      <div className="DesignPage">
        <div className="TitleBox">
          <button
            onClick={() =>
              this.props.history.push(
                `/stories/${+this.props.match.params.category - 1}`
              )
            }
          >
            <VscChevronLeft color="#D17D74" />
            {TitleContents[this.props.match.params.category - 1].prevBtn}
          </button>
          <h1>{TitleContents[this.props.match.params.category - 1].title}</h1>
          <button
            onClick={() =>
              this.props.history.push(
                `/stories/${+this.props.match.params.category + 1}`
              )
            }
          >
            {TitleContents[this.props.match.params.category - 1].nextBtn}
            <VscChevronRight color="#D17D74" />
          </button>
        </div>
        <CoreContents mainItem={mainItem} subItems={subItems} />
      </div>
    );
  }
}

export default Stories;
