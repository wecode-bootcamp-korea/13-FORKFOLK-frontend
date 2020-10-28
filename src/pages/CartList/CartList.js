import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "../ProductList/Components/Product";
import CartProduct from "../CartList/Components/CartProduct";
import { APIROOT } from "../../config";
import "./CartList.scss";
// import { map } from "async";

export default class CartList extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
      interestingProducts: [],
      subtotal: 0,
      shipping: 29,
    };
  }

  componentDidMount() {
    const APIOfCartList = `${APIROOT}/Data/cartList.json`;

    Promise.all([
      fetch(APIOfCartList)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            cartProducts: res.cartData,
            interestingProducts: res.interestingProducts,
            subtotal: res.cartData
              .map((product) => {
                return product.price * product.quantity;
              })
              .reduce((a, b) => a + b),
          });
        })
        .catch((err) => console.log("err.message", err.message)),
    ]);
  }

  getDataFromChild = (
    eachId,
    prevQuantity,
    eachQuantity,
    eachPrice,
    eachTotalPrice
  ) => {
    const { subtotal } = this.state;
    const gapOfQuantity =
      prevQuantity < eachQuantity
        ? eachQuantity - prevQuantity
        : -(prevQuantity - eachQuantity);
    const sumOfGapQuantity = gapOfQuantity * eachPrice;

    this.setState({
      subtotal: sumOfGapQuantity + subtotal,
    });
  };

  deleteProduct = (id, eachTotalPrice) => {
    console.log(`id ${id} is deleted!!`);
    console.log("eachTotalPrice", eachTotalPrice);

    const { cartProducts, subtotal } = this.state;

    const filteredCart = cartProducts.filter(
      (product) => id !== Number(product.id)
    );

    console.log("filteredCart", filteredCart);

    // const filteredCart =
    //   cartProducts.length &&
    //   cartProducts.filter((product) => {
    //     return id !== Number(product.id);
    //   });

    // this.setState({
    //   cartProducts: filteredCart,
    //   subtotal: subtotal - eachTotalPrice,
    // });

    // 10/28 수요일에 백엔드와 맞춰본 후 주석 해제할 예정입니다. (method: "DELETE" 로 변경 예정)
    // ==> current
    // fetch(APIROOT, {
    //     method: "POST",
    //     body: JSON.stringify({
    //         removed_product: id,
    //     })
    // })
    //     .then(res => res.json())
    //     .then(result => console.log(result))
    // ==> changeTo
    // fetch(`APIROOT/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));
  };

  goToCheckout = (e) => {
    e.preventDefault();
    // fetch(`API/checkout`, {method: "GET"})
    //     .then(res => res.json())
    //     .then(result => console.log(result))

    this.props.history.push(`/checkout`);
  };

  render() {
    console.log("all >>> ", this.state.cartProducts);
    const {
      cartProducts,
      interestingProducts,
      subtotal,
      shipping,
    } = this.state;

    if (cartProducts.length === 0) {
      return (
        <div className="CartList">
          <div className="container">
            <div className="emptyModule">
              <h1>Cart</h1>
              <p>Your basket is currently empty.</p>
              <button onClick={() => this.props.history.push(`/shop`)}>
                Return to shop
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="CartList">
        <div className="container">
          <div className="module">
            <h1>Cart</h1>
          </div>
          <div className="commerce">
            <div className="leftSection">
              <Link to="/shop">◀ BACK TO SHOP</Link>
            </div>
            <div className="centerAndRigth">
              <div className="centerSection">
                <table>
                  <thead>
                    <tr>
                      <th colSpan="2">Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th colSpan="2">Total (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((product, i) => {
                      return (
                        <CartProduct
                          key={i}
                          product={product}
                          // onSubmit={
                          //   (this.getDataFromChild, this.getDelDataFromChild)
                          // }
                          deleteProduct={this.deleteProduct}
                        />
                      );
                    })}
                    <tr>
                      <td colSpan="6">
                        <div>
                          <input
                            className="couponCode"
                            type="text"
                            placeholder="Coupon code"
                          ></input>
                          <input
                            className="applyCoupon"
                            type="submit"
                            value="APPLY COUPON"
                          ></input>
                        </div>
                        <div>
                          <input
                            className="updateBasket"
                            type="submit"
                            value="UPDATE BASKET"
                          ></input>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="rightSection">
                <h2>Basket totals</h2>
                <table cellSpacing="0">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>
                        <span>${subtotal}</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>
                        <ul>
                          <li>${shipping}</li>
                          <li>
                            Shipping Options will be updated during checkout.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>${subtotal + shipping}</td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button onClick={this.goToCheckout}>
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="crossSells">
            <h2>You may be interested in...</h2>
            <ul>
              {interestingProducts.map((product, i) => (
                <Product key={i} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
