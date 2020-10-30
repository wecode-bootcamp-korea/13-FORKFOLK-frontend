import React, { Component } from "react";
import "./ProductCartMenu.scss";
import { BASKET_API } from "../../../config";

class ProductCartMenu extends Component {
  constructor() {
    super();
    this.state = {
      countProduct: 0,
      totalPrice: 0,
      clientToken: null,
    };
  }

  changeCountProduct = (e) => {
    const { countProduct } = this.state;
    let count = countProduct;
    e.target.name === "plus" ? count++ : count--;
    if (count < 0) count = 0;
    this.setState({
      countProduct: count,
      totalPrice: this.props.price * count,
      clientToken: localStorage.getItem("user-token"),
    });
  };

  moveToBasket = () => {
    const { id } = this.props;
    const { countProduct } = this.state;
    countProduct
      ? fetch(BASKET_API, {
          method: "POST",
          body: JSON.stringify({
            status: "beforeOrder",
            product_id: id,
            quantity: countProduct,
          }),
          headers: {
            Authorization: localStorage.getItem("user-token"),
          },
        })
          .then((response) => response.json())
          .then((result) => {
            this.props.goToBasket();
          })
      : window.alert("수량을 확인해 주세요");
  };

  render() {
    const { countProduct, totalPrice } = this.state;
    return (
      <div className="productCartMenu">
        <div className="countContainer">
          <span>{countProduct}</span>
          <button name="minus" onClick={this.changeCountProduct}>
            -
          </button>
          <button name="plus" onClick={this.changeCountProduct}>
            +
          </button>
        </div>
        <div className="totalContainer">
          <span>Total Price</span>
          <span>${totalPrice}</span>
        </div>
        <div className="cartContainer" onClick={this.moveToBasket}>
          Add to basket
        </div>
      </div>
    );
  }
}

export default ProductCartMenu;
