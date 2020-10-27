import React, { Component } from "react";
import "./ParallaxBackgroundContent.scss";
import backgroundImg from "../Image/alina-rubo-fjZ8wa1PhmI-unsplash.jpg";

class ParallaxBackgroundContent extends Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
    };
  }
  parallaxBg = () => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      this.setState({ scrollY: window.scrollY });
      if (
        (window.scrollY >= 1400 && window.scrollY < 2900) ||
        (window.scrollY >= 5900 && window.scrollY < 7500)
      ) {
        this.setState({ scrollY: window.scrollY });
      }
    });
  };

  componentDidMount() {
    this.parallaxBg();
  }
  render() {
    const { scrollY } = this.props;
    return (
      <div className="ParallaxBackgroundContent">
        <img
          src={backgroundImg}
          alt="img"
          style={{ top: `${(this.state.scrollY - scrollY) * 0.5}px` }}
        />
        <span>NINA RICCI</span>
      </div>
    );
  }
}

export default ParallaxBackgroundContent;
