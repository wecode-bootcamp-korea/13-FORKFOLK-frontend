import React, { Component } from "react";
import OrderInfoInput from "./components/OrderInfoInput";
import Order from "./components/Order";
import PaymentChoice from "./components/PaymentChoice";
import FORM_INFO from "./CheckOutFormInfo";
import { CHECKOUT_API } from "../../config";
import "./Checkout.scss";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      formInfo: [],
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

  checkoutFormOnChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.setState({ formInfo: FORM_INFO });
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
        <div className="flexContainer">
          <div>
            <h3>Billing Details</h3>
            <form className="infoForm">
              <ul>
                {this.state.formInfo.map((form) => {
                  return (
                    <OrderInfoInput
                      labelTitle={form.labelTitle}
                      checkoutFormOnChangeHandler={
                        this.checkoutFormOnChangeHandler
                      }
                      inputName={form.inputName}
                      placeholder={form.placeHolder}
                      inputValue={this.state[form.inputName]}
                    />
                  );
                })}
              </ul>
            </form>
          </div>
          <div>
            <h3>Your Order</h3>
            <Order />
            <PaymentChoice />
            <button onClick={() => this.clickCheckout()}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
