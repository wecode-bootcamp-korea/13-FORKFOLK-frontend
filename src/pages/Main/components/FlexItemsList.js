import React, { Component } from "react";
import FlexItem from "./FlexItem";
import "./FlexItemsList.scss";
class FlexItemsList extends Component {
  render() {
    const { title, contents, className } = this.props;
    return (
      <div className={`FlexItemsList ${className}`}>
        <h3>{title}</h3>
        <ul>
          {contents.map((content) => {
            const { id, imgSrc, issueNumber, title, description } = content;
            return (
              <FlexItem
                key={id}
                imgSrc={imgSrc}
                issueNumber={issueNumber}
                title={title}
                description={description}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FlexItemsList;
