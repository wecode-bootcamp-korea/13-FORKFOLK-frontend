import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "./components/Input";
import "./Checkout.scss";
class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      key: "hello",
    };
  }
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
        <div className="checkoutForms">
          <form>
            <h3>Billing Details</h3>
            <Input isRequired={true} label="Name" />
            <Input isRequired={true} label="Street address" />
            <Input isRequired={true} label="Phone" />
          </form>
          <div>
            <h3>Your Order</h3>
            <table>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
              <tr>
                <td>Issu 36 x 1</td>
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
            </table>
            <ul>
              <li>
                <input type="radio" id="payType" name="Credit Card" value="creditCard" checked />
                <label htmlFor="payType">Credit Card</label>
                <span>Pay with your credit card via Stripe</span>
                <label htmlFor="cardNum">Card Number</label>
                <input placeholder="1234 1234 1234 1234" id="cardNum" />
                <label htmlFor="expiryDate">expiry Date</label>
                <input placeholder="MM / YY" id="expiryDate" />
                <label htmlFor="cvc">card Code(CVC)</label>
                <input placeholder="CVC" id="cvc" />
              </li>
              <li>
                <input type="radio" id="payType" name="drone" value="paypal" />
                <label htmlFor="payType">Paypal</label>
                <span>
                  Pay via PayPal; you can pay with your credit card if you don't have a PayPal
                  account.
                </span>
              </li>
            </ul>
            <input type="checkbox" />
            <label>Subscribe to our newsletter</label>
            <input type="checkbox" />
            <label>
              I've read and accept the <sapn>terms &#38; conditions *</sapn>
            </label>
            <button>PLACE ORDER</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
