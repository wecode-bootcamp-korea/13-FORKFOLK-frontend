import React, { Component } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

const OPTIONVALUE = [
  { value: 1, quantity: 1 },
  { value: 2, quantity: 2 },
  { value: 3, quantity: 3 },
  { value: 4, quantity: 4 },
  { value: 5, quantity: 5 },
  { value: 6, quantity: 6 },
  { value: 7, quantity: 7 },
  { value: 8, quantity: 8 },
  { value: 9, quantity: 9 },
];

export default class CartProduct extends Component {
  render() {
    const {
      product: { id, image, name, price, quantity },
      changeQuantity,
      deleteProduct,
    } = this.props;

    return (
      <tr className="cartProducts" key={id}>
        <td>
          <img src={image} alt="장바구니 상품" />
        </td>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          <select value={quantity} onChange={(e) => changeQuantity(e, id)}>
            {OPTIONVALUE.map((eachOption, i) => {
              return (
                <option key={i} value={eachOption.value}>
                  {eachOption.quantity}
                </option>
              );
            })}
          </select>
        </td>
        <td>${price * quantity}</td>
        <td>
          <button className="delBtn">
            <FaRegTimesCircle
              className="delIcon"
              onClick={() => deleteProduct(id, price * quantity)}
            />
          </button>
        </td>
      </tr>
    );
  }
}
