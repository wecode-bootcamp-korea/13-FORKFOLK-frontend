import React, { Component } from "react";
import "./CurrentIssue.scss";

class CurrendIssue extends Component {
  render() {
    return (
      <div className="CurrentIssue">
        <h3>Current Issue</h3>
        <div className="sliderContainer">
          <ul>
            <li>
              <img
                src={
                  "https://images.unsplash.com/photo-1456421385613-d0666bb96b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                }
              />
            </li>
            <li>
              <img
                src={
                  "https://images.unsplash.com/photo-1586116177830-d58010188987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                }
              />
            </li>
            <li>
              <img
                src={
                  "https://images.unsplash.com/photo-1533564504789-500c2f93af7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                }
              />
            </li>
            <li>
              <img
                src={
                  "https://images.unsplash.com/photo-1530685220108-0ebdc8c85742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                }
              />
            </li>
            <li>
              <img
                src={
                  "https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                }
              />
            </li>
            <li>
              <img
                src={
                  "https://images.unsplash.com/photo-1567005753256-c0529035b300?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                }
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CurrendIssue;
