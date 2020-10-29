import React, { Component } from "react";
import OrderInfoInput from "./components/OrderInfoInput";
import Order from "./components/Order";
import PaymentChoice from "./components/PaymentChoice";
import FORM_INFO from "./CheckoutFormInfo";
import { CHECKOUT_API } from "../../config";
import "./Checkout.scss";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      buttonValid: false,
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
      headers: new Headers({
        Authorization: localStorage.getItem("user-token"),
      }),
      body: JSON.stringify({
        name,
        address,
        phone_number,
      }),
    });
  };

  buttonValidHandler = () => {
    const { name, address, phone_number } = this.state;
    name.length && address.length && phone_number.length
      ? this.setState({ buttonValid: true })
      : this.setState({ buttonValid: false });
  };

  checkoutFormOnChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.buttonValidHandler();
      }
    );
  };

  componentDidMount() {
    this.setState({ formInfo: FORM_INFO });
  }

  render() {
    const { buttonValid, formInfo } = this.state;
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
                {formInfo.map((form) => {
                  return (
                    <OrderInfoInput
                      key={form.id}
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
            <button
              className={buttonValid ? "enable" : "disable"}
              onClick={() => this.clickCheckout()}
              disabled={!buttonValid}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
