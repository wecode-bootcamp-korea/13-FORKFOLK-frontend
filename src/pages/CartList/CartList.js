import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "../ProductList/Components/Product";
import CartProduct from "../CartList/Components/CartProduct";
import { JINAPIROOT } from "../../config";
import { BEAPIROOT } from "../../config";
import "./CartList.scss";
const APIOfCartList = `${JINAPIROOT}/Data/cartList.json`;
const backendAPI = `${BEAPIROOT}/order`;
export default class CartList extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
      // interestingProducts: [],
      subtotal: 0,
      shipping: 29,
    };
  }
  componentDidMount() {
    console.log("componentDidMount start");
    Promise.all([
      fetch(`${backendAPI}?status=beforeOrder`, {
        headers: {
          Authorization: localStorage.getItem("user-token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            cartProducts: res.in_cart_list,
            // interestingProducts: res.interestingProducts,
            subtotal: res.in_cart_list
              .map((product) => {
                return product.price * product.quantity;
              })
              .reduce((a, b) => a + b),
          });
        })
        .catch((err) => console.log("err.message", err.message)),
    ]);
  }
  changeQuantity = (e, productId) => {
    const { value } = e.target;
    const { cartProducts } = this.state;
    this.setState((prevState) => ({
      cartProducts: prevState.cartProducts.map((product) =>
        product.id === productId ? { ...product, quantity: value } : product,
      ),
      subtotal: cartProducts
        .map((product) => {
          return product.price * value;
        })
        .reduce((a, b) => a + b),
    }));
    fetch(backendAPI, {
      method: "POST",
      body: JSON.stringify({
        status: "beforeOrder",
        product_id: productId,
        quantity: value,
      }),
      headers: {
        Authorization: localStorage.getItem("user-token"),
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  deleteProduct = (id, totalPrice) => {
    console.log("delete 함수가 실행중입니다.");
    // const { cartProducts, subtotal } = this.state;
    console.log("id", id);
    fetch(backendAPI, {
      method: "DELETE",
      body: JSON.stringify({
        status: "beforeOrder",
        product_id: id,
      }),
      headers: {
        Authorization: localStorage.getItem("user-token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // this.setState({
        //   cartProducts: res.in_cart_list
        // });
      });
    // const filteredCart = cartProducts.filter(
    //   (product) => id !== Number(product.id)
    // );
    // this.setState({
    //   cartProducts: filteredCart,
    //   subtotal: subtotal - totalPrice,
    // });
  };
  goToCheckout = (e) => {
    e.preventDefault();
    // fetch(`API/checkout`, {method: "GET"})
    //     .then(res => res.json())
    //     .then(result => console.log(result))
    this.props.history.push(`/checkout`);
  };
  render() {
    const {
      cartProducts,
      // interestingProducts,
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
              <button onClick={() => this.props.history.push(`/shop`)}>Return to shop</button>
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
                    {cartProducts.length &&
                      cartProducts.map((product, i) => {
                        return (
                          <CartProduct
                            key={i}
                            product={product}
                            changeQuantity={this.changeQuantity}
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
                          <input className="applyCoupon" type="submit" value="APPLY COUPON"></input>
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
                          <li>Shipping Options will be updated during checkout.</li>
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
                  <button onClick={this.goToCheckout}>PROCEED TO CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
          <div className="crossSells">
            <h2>You may be interested in...</h2>
            <ul>
              <li>제품 출력 예정입니다.</li>
              {/* {interestingProducts.map((product, i) => (
                <Product key={i} product={product} />
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
