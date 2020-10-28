import React, { Component } from "react";
import "./OrderInfoInput.scss";

class OrderInfoInput extends Component {
  inputValidationHandler = (e) => {
    if (e.target.name === "name") {
      console.log("name");
    }
    if (e.target.name === "address") {
      console.log("address");
    }
    if (e.target.name === "phone_number") {
      console.log("phone");
    }
  };

  onChangeFunctionHandler = (e) => {
    this.inputValidationHandler(e);
    this.props.checkoutFormOnChangeHandler(e);
  };

  render() {
    const { labelTitle, inputName, placeholder, inputValue } = this.props;

    return (
      <li className="OrderInfoInput">
        <label>{labelTitle} *</label>
        <input
          onChange={(e) => this.onChangeFunctionHandler(e)}
          name={inputName}
          placeholder={placeholder}
          value={inputValue}
        />
        <span></span>
      </li>
    );
  }
}

export default OrderInfoInput;
