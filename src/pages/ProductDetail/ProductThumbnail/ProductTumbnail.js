import React, { Component } from "react";
import "./ProductTumbnail.scss";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      productImgIdx: 0,
    };
  }

  changeproductImgIdx = (e) => {
    const { productImgIdx } = this.state;
    const { name } = e.target;
    const { productImg } = this.props;
    name === "R"
      ? this.setState({
          productImgIdx:
            productImgIdx < productImg.length - 1
              ? productImgIdx + 1
              : productImgIdx,
        })
      : this.setState({
          productImgIdx: productImgIdx > 0 ? productImgIdx - 1 : productImgIdx,
        });
  };

  render() {
    const { productImg } = this.props;
    const { productImgIdx } = this.state;
    return (
      <div className="productThumbnail">
        <img className="fadein" src={productImg[productImgIdx]} />
        <button
          name="L"
          onClick={this.changeproductImgIdx}
          className="productThumbnailLeftBtn"
        ></button>
        <button
          name="R"
          onClick={this.changeproductImgIdx}
          className="productThumbnailRightBtn"
        ></button>
      </div>
    );
  }
}

export default Product;
