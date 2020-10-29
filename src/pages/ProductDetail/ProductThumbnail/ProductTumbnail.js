import React, { Component } from "react";
import "./ProductTumbnail.scss";
import { FaExpand } from "react-icons/fa";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      productImgIdx: 0,
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
          productImgIdx: productImgIdx < productImg.length - 1 ? productImgIdx + 1 : productImgIdx,
        })
      : this.setState({
          productImgIdx: productImgIdx > 0 ? productImgIdx - 1 : productImgIdx,
        });
  };

  changeModalVisible = (e) => {
    this.setState({ visible: e.target.name === "enlarge" });
  };

  render() {
    const { productImg } = this.props;
    const { productImgIdx, visible } = this.state;
    return (
      <div className="productThumbnail" onScroll={this.changeModalVisible}>
        <div className="thumbnailContainer">
          <img className="fadein" alt="productImg" src={productImg[productImgIdx]} />
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
          <button name="enlarge" className="enlarge" onClick={this.changeModalVisible}>
            <FaExpand className="FaExpand" />
          </button>
        </div>
        <div className={visible ? "thumbnailModal showing" : "thumbnailModal"}>
          <header>
            <button onClick={this.changeModalVisible}>X</button>
          </header>
          <section>
            <button className="LBtn" name="L" onClick={this.changeproductImgIdx}>
              <img
                alt="LBtnImg"
                src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-left.svg"
              />
            </button>
            <div className="modalImgContainer">
              <img alt="html" src={productImg[productImgIdx]}></img>
            </div>
            <button className="RBtn" name="R" onClick={this.changeproductImgIdx}>
              <img
                alt="RBtnImg"
                src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-right.svg"
              />
            </button>
          </section>
        </div>
      </div>
    );
  }
}

export default Product;
