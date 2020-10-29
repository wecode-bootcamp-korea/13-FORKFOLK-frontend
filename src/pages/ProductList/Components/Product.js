import React, { Component } from "react";
import ReactModal from "react-modal";
import "./Product.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { BEAPIROOT } from "../../../config";

ReactModal.setAppElement("#root");

class Product extends Component {
  constructor() {
    super();
    this.state = {
      isFullHeartBool: false,
      modalIsOpen: false,
      setModalIsOpen: false,
    };
  }

  isChangeHeartColor = (bool) => {
    this.setState({
      isFullHeartBool: true ? bool : !bool,
    });
  };

  addToCart = (id, name, price) => {
    fetch(`${BEAPIROOT}/order`, {
      method: "POST",
      body: JSON.stringify({
        status: "beforeOrder",
        product_id: id,
        quantity: 1,
      }),
      headers: {
        Authorization: localStorage.getItem("user-token"),
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  setModalIsOpen = (bool) => {
    this.setState({
      modalIsOpen: bool,
      setModalIsOpen: bool,
    });
  };

  render() {
    const { isFullHeartBool } = this.state;
    const {
      product: { id, image, name, price, category },
      filterByCategory,
      goToProductDetail,
      goToCartPage,
    } = this.props;

    return (
      <li id={id} className="Product">
        <div className="imageContainer">
          <button
            onClick={() => {
              goToProductDetail(id);
            }}
          >
            <img className="productImage" src={image} alt="상품 이미지" />
          </button>
          <button className="heartIcon" onClick={() => this.isChangeHeartColor(!isFullHeartBool)}>
            {isFullHeartBool ? (
              <FaHeart className="fullHeart" />
            ) : (
              <FaRegHeart className="emptyHeart" />
            )}
          </button>
          <button
            className="addToCart"
            onClick={() => {
              this.addToCart(id, name, price);
              this.setModalIsOpen(true);
            }}
          >
            Add to Cart
          </button>
        </div>
        <button
          className="category"
          onClick={() => filterByCategory(category, 1)}
          category={category}
        >
          {category}
        </button>
        <p>{name}</p>
        <div>${price}</div>
        <ReactModal
          className="modalWindow"
          isOpen={this.state.modalIsOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => this.setModalIsOpen(false)}
        >
          <div>
            <h2 className="ebGaramond">Added to Cart!</h2>
            <button onClick={() => this.setModalIsOpen(false)}>
              <FaRegTimesCircle />
            </button>
          </div>

          <div>
            <button onClick={goToCartPage}>View Cart</button>
            <button onClick={() => this.setModalIsOpen(false)}>Stay on this Page</button>
          </div>
        </ReactModal>
      </li>
    );
  }
}

export default Product;
