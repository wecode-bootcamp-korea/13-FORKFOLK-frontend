import React, { Component } from "react";
import "./OrderInfoInput.scss";

class OrderInfoInput extends Component {
  render() {
    const {
      labelTitle,
      inputName,
      placeholder,
      inputValue,
      checkoutFormOnChangeHandler,
      message,
    } = this.props;

    return (
      <li className="OrderInfoInput">
        <label>{labelTitle} *</label>
        <input
          onChange={(e) => checkoutFormOnChangeHandler(e)}
          name={inputName}
          placeholder={placeholder}
          value={inputValue}
        />
        <span>{message}</span>
      </li>
    );
  }
}

export default OrderInfoInput;
