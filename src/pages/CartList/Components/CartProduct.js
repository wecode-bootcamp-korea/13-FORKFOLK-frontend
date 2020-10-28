import React, { Component } from "react";
import { APIROOT } from "../../../config";
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
  // 내용 모두 부모로 옮김.
  // constructor() {
  //   super();
  //   this.state = {
  //     product: {},
  //     prevQuantity: 0,
  //     eachQuantity: 0,
  //     eachTotalPrice: 0,
  //   };
  // }

  // 내용 모두 부모로 옮김.
  // changeQuantity = (e) => {
  //   const { value } = e.target;
  //   const { id, image, name, quantity, price } = this.state.product;

  //   this.setState(
  //     {
  //       product: {
  //         id,
  //         image,
  //         name,
  //         quantity: value,
  //         price,
  //       },
  //       prevQuantity: quantity,
  //       eachQuantity: value,
  //       eachPrice: price,
  //       eachTotalPrice: Number(price * value),
  //     },
  //     this.sendDataToParent
  //   );
  //
  // 10/28 수요일에 백엔드와 맞춰본 후 주석 해제할 예정입니다. (method: "PATCH" 로 변경 예정)
  // ==> current
  // fetch(APIROOT, {
  //     method: "POST",
  //     body: JSON.stringify({
  //         product_id: id,
  //         name: name,
  //         price: price,
  //         quantity: value
  //     })
  // })
  //     .then(res => res.json())
  //     .then(result => console.log(result))
  // ==> changeTo
  // fetch(`APIROOT/${id}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //         quantity: value
  //     })
  // })
  //     .then(res => res.json())
  //     .then(result => console.log(result))
  // };

  // sendDataToParent = () => {
  //   const {
  //     product,
  //     prevQuantity,
  //     eachQuantity,
  //     eachPrice,
  //     eachTotalPrice,
  //   } = this.state;

  //   this.props.onSubmit(
  //     product.id,
  //     prevQuantity,
  //     eachQuantity,
  //     eachPrice,
  //     eachTotalPrice
  //   );
  // };

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
          <select
            value={product.quantity}
            onChange={(e) => changeQuantity(e, product.id)}
          >
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
              onClick={() => deleteProduct(product.id)}
            />
          </button>
        </td>
      </tr>
    );
  }
}
