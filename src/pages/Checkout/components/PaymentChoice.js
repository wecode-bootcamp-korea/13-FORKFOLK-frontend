import React, { Component } from "react";
import "./PaymentChoice.scss";

import VISALOGO from "../Images/visa_logo.png";
import AMERICANLOGO from "../Images/american_logo.png";
import MASTERLOGO from "../Images/master_logo.png";
import DISCOVERLOGO from "../Images/discover_logo.png";
import JCBLOGO from "../Images/jcb_logo.png";
import DINERSLOGO from "../Images/diners_logo.png";
import PAYPALLOGO from "../Images/paypal_logo.png";

class PaymentChoice extends Component {
  constructor() {
    super();
    this.state = {
      creditCard: true,
      payPal: false,
    };
  }

  radioOnChangeHandler = () => {
    this.setState({
      creditCard: !this.state.creditCard,
      payPal: !this.state.payPal,
    });
  };

  render() {
    return (
      <ul className="PaymentChoice">
        <li>
          <div className="titleContents">
            <input
              type="radio"
              name="payment"
              checked={this.state.creditCard}
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
          <div
            className={`innerContents ${
              this.state.creditCard ? "" : "invisible"
            }`}
          >
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
              checked={this.state.payPal}
              onChange={() => this.radioOnChangeHandler()}
            />
            <label>Paypal</label>
            <ul className="cardList">
              <li>
                <img src={PAYPALLOGO} />
              </li>
            </ul>
          </div>
          <div
            className={`innerContents ${
              this.state.creditCard ? "invisible" : ""
            }`}
          >
            <span>
              Pay via PayPal; you can pay with your credit card if you don't
              have a PayPal account.
            </span>
          </div>
        </li>
      </ul>
    );
  }
}

export default PaymentChoice;
