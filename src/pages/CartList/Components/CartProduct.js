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
    const { product, changeQuantity, deleteProduct } = this.props;
    return (
      <tr className="cartProducts" key={product.id}>
        <td>
          <img src={product.image} alt="장바구니 상품" />
        </td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>
          <select value={product.quantity} onChange={(e) => changeQuantity(e, product.id)}>
            {OPTIONVALUE.map((eachOption, i) => {
              return (
                <option key={i} value={eachOption.value}>
                  {eachOption.quantity}
                </option>
              );
            })}
          </select>
        </td>
        <td>${product.price * product.quantity}</td>
        <td>
          <button className="delBtn">
            <FaRegTimesCircle
              className="delIcon"
              onClick={() => deleteProduct(product.id, product.price * product.quantity)}
            />
          </button>
        </td>
      </tr>
    );
  }
}
