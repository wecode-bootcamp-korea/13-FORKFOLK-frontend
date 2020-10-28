import React, { Component } from "react";
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
      userName: "",
      address: "",
      phoneNumber: "",
    };
  }
  radioOnChangeHandler = () => {
    this.setState({ creditCard: !this.state.creditCard, payPal: !this.state.payPal });
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
                <li>
                  <label>Name</label>
                  <input name="userName" placeholder="Please input your name" />
                </li>
                <li>
                  <label>Address</label>
                  <input name="address" placeholder="Please input your address" />
                </li>
                <li>
                  <label>Phone Number</label>
                  <input name="phoneNumber" placeholder="Please input your phone number" />
                </li>
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
                <tr>
                  <td>Issue36 x 1</td>
                  <td>$18</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>$18</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$9</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$27</td>
                </tr>
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
            <button>PLACE ORDER</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
