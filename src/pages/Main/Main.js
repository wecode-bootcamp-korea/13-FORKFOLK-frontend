import React, { Component } from "react";
import Header from "../../components/Header/Header";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      logoScale: 8,
      wheelDeltaCount: 0,
      logoMarginTop: 240,
    };
  }
  componentDidMount() {
    window.addEventListener("wheel", (e) => {
      const { logoScale, wheelDeltaCount, logoMarginTop } = this.state;
      const { wheelDelta } = e;
      if (window.pageYOffset > 1000) {
        return;
      }
      this.setState({ wheelDeltaCount: wheelDelta / 120 }, () => {
        if (logoScale + wheelDeltaCount < 1 || logoMarginTop < 0) {
          this.setState({ logoScale: 1, logoMarginTop: 0 });
        } else if (logoScale + wheelDeltaCount > 8 || logoMarginTop > 240) {
          this.setState({ logoScale: 8, logoMarginTop: 240 });
        } else {
          this.setState({
            logoScale: logoScale + wheelDeltaCount,
            logoMarginTop: logoMarginTop + wheelDeltaCount * 100,
          });
        }
      });
    });
  }
  render() {
    const { logoScale, logoMarginTop } = this.state;
    return (
      <div>
        <Header logoScale={logoScale} logoMarginTop={logoMarginTop} />
        Main
      </div>
    );
  }
}
export default Main;
