import React, { Component } from "react";
import ReactModal from "react-modal";
import "./Product.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

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

  componentDidMount() {
    window.addEventListener("mousedown", () => this.setModalIsOpen(false));
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", () => this.setModalIsOpen(true));
  }

  isChangeHeartColor = () => {
    const { isFullHeartBool } = this.state;
    if (isFullHeartBool === false) {
      this.setState({
        isFullHeartBool: true,
      });
    } else {
      this.setState({
        isFullHeartBool: false,
      });
    }
  };

  addToCart = (id, name, price) => {
    console.log(id, name, price, 1);
    // 10/28 수요일에 백엔드와 맞춰본 후 주석 해제할 예정입니다.
    // fetch(APIROOT, {
    //     method: "POST",
    //     body: JSON.stringify({
    //         product_id: id,
    //         name: name,
    //         price: price,
    //         quantity: 1
    //     })
    // })
    //     .then(res => res.json())
    //     .then(result => console.log(result))
  };

  setModalIsOpen = (bool) => {
    console.log("setModalIsOpen is changed");
    this.setState(
      {
        modalIsOpen: bool,
        setModalIsOpen: bool,
      },
      console.log(this.state.setModalIsOpen)
    );
  };

  render() {
    const { isFullHeartBool } = this.state;
    const {
      product,
      filterByCategory,
      goToProductDetail,
      goToCartPage,
    } = this.props;
    return (
      <li id={product.id} className="Product">
        <div className="imageContainer">
          <button
            onClick={() => {
              goToProductDetail(product.id);
            }}
          >
            <img
              className="productImage"
              src={product.image}
              alt="상품 이미지"
            />
          </button>
          <button className="heartIcon" onClick={this.isChangeHeartColor}>
            {isFullHeartBool ? (
              <FaHeart className="fullHeart" />
            ) : (
              <FaRegHeart className="emptyHeart" />
            )}
          </button>
          <button
            className="addToCart"
            onClick={() => {
              this.addToCart(product.id, product.name, product.price);
              this.setModalIsOpen(true);
            }}
          >
            Add to Cart
          </button>
        </div>
        <button
          className="category"
          onClick={() => filterByCategory(product.category)}
          category={product.category}
        >
          {product.category}
        </button>
        <p>{product.name}</p>
        <div>${product.price}</div>
        <ReactModal
          className="modalWindow"
          isOpen={this.state.modalIsOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => this.setModalIsOpen(true)}
        >
          <div>
            <h2 className="ebGaramond">Added to Cart!</h2>
            <button onClick={() => this.setModalIsOpen(false)}>
              <FaRegTimesCircle />
            </button>
          </div>

          <div>
            <button onClick={goToCartPage}>View Cart</button>
            <button onClick={() => this.setModalIsOpen(false)}>
              Stay on this Page
            </button>
          </div>
        </ReactModal>
      </li>
    );
  }
}

export default Product;
