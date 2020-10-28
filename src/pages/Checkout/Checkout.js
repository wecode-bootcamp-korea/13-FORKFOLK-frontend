import React, { Component } from "react";
import OrderInfoInput from "./components/OrderInfoInput";
import Order from "./components/Order";
import { CHECKOUT_API } from "../../config";
import "./Checkout.scss";
import VISALOGO from "./images/visa_logo.png";
import AMERICANLOGO from "./images/amercan_logo.png";
import MASTERLOGO from "./images/master_logo.png";
import DISCOVERLOGO from "./images/discover_logo.png";
import JCBLOGO from "./images/jcb_logo.png";
import DINERSLOGO from "./images/diners_logo.png";
import PAYPALLOGO from "./images/paypal_logo.png";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      creditCard: true,
      payPal: false,
      name: "",
      address: "",
      phone_number: "",
    };
  }
  clickCheckout = () => {
    const { name, address, phone_number } = this.state;
    fetch(CHECKOUT_API, {
      method: "POST",
      body: JSON.stringify({
        name,
        address,
        phone_number,
      }),
    });
  };

  radioOnChangeHandler = () => {
    this.setState({ creditCard: !this.state.creditCard, payPal: !this.state.payPal });
  };

  checkoutFormOnChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="Checkout">
        <h3>Checkout</h3>
        <p className="ebGaramond">
          Returning customer? <span>Click here to login</span>
        </p>
        <p className="ebGaramond">
          Have a coupon? <span>Click here to enter your code</span>
        </p>
        <div className="flexContainer">
          <div>
            <h3>Billing Details</h3>
            <form className="infoForm">
              <ul>
                <OrderInfoInput
                  labelTitle="Name"
                  checkoutFormOnChangeHandler={this.checkoutFormOnChangeHandler}
                  inputName="name"
                  placeholder="Please input your name"
                  inputValue={this.state.name}
                />
                <OrderInfoInput
                  labelTitle="Address"
                  checkoutFormOnChangeHandler={this.checkoutFormOnChangeHandler}
                  inputName="address"
                  placeholder="Please input your address"
                  inputValue={this.state.address}
                />
                <OrderInfoInput
                  labelTitle="Phone Number"
                  checkoutFormOnChangeHandler={this.checkoutFormOnChangeHandler}
                  inputName="phone_number"
                  placeholder="Please input your phone number"
                  inputValue={this.state.phone_number}
                />
              </ul>
            </form>
          </div>
          <div>
            <h3>Your Order</h3>
            <table>
              <tbody>
                <tr>
                  <th>Product</th>
                  <th>Subtotal</th>
                </tr>
                <Order />
              </tbody>
            </table>
            <ul className="paymentChoice">
              <li>
                <div className="titleContents">
                  <input
                    type="radio"
                    name="payment"
                    checked={this.state.creditCard ? true : false}
                    onChange={() => this.radioOnChangeHandler()}
                  />
                  <label>Credit Card</label>
                  <ul className="cardList">
                    <li>
                      <img src={VISALOGO} />
                    </li>
                    <li>
                      <img src={AMERICANLOGO} />
                    </li>
                    <li>
                      <img src={MASTERLOGO} />
                    </li>
                    <li>
                      <img src={DISCOVERLOGO} />
                    </li>
                    <li>
                      <img src={JCBLOGO} />
                    </li>
                    <li>
                      <img src={DINERSLOGO} />
                    </li>
                  </ul>
                </div>
                <div className={`innerContents ${this.state.creditCard ? "" : "invisible"}`}>
                  <span>Pay with your credit card via Stripe.</span>
                  <form className="cardInfoForm">
                    <ul>
                      <li>
                        <label>Card Number *</label>

                        <input placeholder="1234 1234 1234 1234" />
                      </li>
                      <li>
                        <label>Expiry Date *</label>
                        <input placeholder="MM / YY" />
                      </li>
                      <li>
                        <label>Card Code(CVC) *</label>
                        <input placeholder="CVC" />
                      </li>
                    </ul>
                  </form>
                </div>
              </li>
              <li>
                <div className="titleContents">
                  <input
                    type="radio"
                    name="payment"
                    checked={this.state.payPal ? true : false}
                    onChange={() => this.radioOnChangeHandler()}
                  />
                  <label>Paypal</label>
                  <ul className="cardList">
                    <li>
                      <img src={PAYPALLOGO} />
                    </li>
                  </ul>
                </div>
                <div className={`innerContents ${this.state.creditCard ? "invisible" : ""}`}>
                  <span>
                    Pay via PayPal; you can pay with your credit card if you don't have a PayPal
                    account.
                  </span>
                </div>
              </li>
            </ul>
            <button onClick={() => this.clickCheckout()}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;