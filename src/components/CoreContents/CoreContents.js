import React, { Component } from "react";
import "./CoreContents.scss";
class CoreContents extends Component {
  constructor() {
    super();
    this.state = {
      subItem: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/CoreContentsdata.json", {
      method: "GET",
    })
      .then((CoreContentsdata) => CoreContentsdata.json())
      .then((contentsData) => this.setState({ subItem: contentsData.subItem }));
  }

  render() {
    return (
      <div className="coreComponents">
        <div className="mainContents">
          <img src="https://images.unsplash.com/photo-1588641750012-474003b37f49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" />
          <p>
            <span>FEATURE</span>
          </p>
          <h1>Rock Steady</h1>
          <p>
            A breath of fresh air amid the ancient Stone Forest of <br />
            southwestern China.
          </p>
        </div>
        <div className="subContents">
          {this.state.subItem.map((subItems) => {
            const { id, imgSrc, issueNumber, title, description } = subItems;
            return (
              <div className="subContentItem" key={id}>
                <img src={imgSrc} />
                <p>
                  <span>ISSUE {issueNumber}</span>
                </p>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CoreContents;
