import React, { Component } from "react";

class OrderInfoInput extends Component {
  render() {
    const {
      labelTitle,
      inputName,
      checkoutFormOnChangeHandler,
      placeholder,
      inputValue,
    } = this.props;
    return (
      <li className="OrderInfo">
        <label>{labelTitle}</label>
        <input
          onChange={(e) => checkoutFormOnChangeHandler(e)}
          name={inputName}
          placeholder={placeholder}
          value={inputValue}
        />
      </li>
    );
  }
}

export default OrderInfoInput;
