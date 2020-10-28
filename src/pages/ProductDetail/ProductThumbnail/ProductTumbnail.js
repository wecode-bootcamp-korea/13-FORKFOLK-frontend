import React, { Component } from "react";
import "./ProductTumbnail.scss";
import { FaExpand } from "react-icons/fa";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      productImgIdx: 1,
      visible: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeModalVisible);
  }

  changeproductImgIdx = (e) => {
    const { name } = e.target;
    const { productImgIdx } = this.state;
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

  changeModalVisible = (e) => {
    this.setState({ visible: e.target.name === "enlarge" ? true : false });
  };

  render() {
    const { productImg } = this.props;
    const { productImgIdx, visible } = this.state;
    return (
      <div className="productThumbnail" onScroll={this.changeModalVisible}>
        <div className="thumbnailContainer">
          <img
            className="fadein"
            alt="productImg"
            src={productImg[productImgIdx]}
          />
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
          <button
            name="enlarge"
            className="enlarge"
            onClick={this.changeModalVisible}
          >
            <FaExpand className="FaExpand" />
          </button>
        </div>
        <div className={visible ? "thumbnailModal showing" : "thumbnailModal"}>
          <div>
            <span>1 of 10</span>
            <button onClick={this.changeModalVisible}>X</button>
          </div>
          <section>
            <img
              alt="left"
              name="L"
              onClick={this.changeproductImgIdx}
              src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-left.svg"
            />
            <img src={productImg[productImgIdx]}></img>
            <img
              alt="right"
              name="R"
              onClick={this.changeproductImgIdx}
              src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-right.svg"
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Product;
