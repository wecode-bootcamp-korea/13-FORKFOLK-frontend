import React, { Component } from "react";
import "./FashionIssue.scss";

class FashionIssue extends Component {
  render() {
    return (
      <div className="FashionIssue">
        <div>
          <div>
            <img
              src={
                "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              }
              alt="title"
            />
          </div>
          <div>
            <img
              src={
                "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80"
              }
              alt="title"
            />
          </div>
        </div>
        <h3>FASHION, ISSUE37</h3>
        <span>Material Girl</span>
        <p>
          The most interesting people, stories and haircuts all have layers.
          This fall, so dos your wardrobe.
        </p>
      </div>
    );
  }
}

export default FashionIssue;
