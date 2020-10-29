import React, { Component } from "react";
import OrderItem from "./OrderItem";
import { ORDER_API } from "../../../config";
import "./Order.scss";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      total: 0,
    };
  }

  getTotalAmount = () => {
    const { orderList } = this.state;
    let totalAccount = 0;
    for (let order of orderList) {
      totalAccount += Number(order.price) * Number(order.quantity);
    }
    this.setState({ total: totalAccount });
  };

  componentDidMount() {
    fetch(`${ORDER_API}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ orderList: res.cartData }, () => {
          this.getTotalAmount();
        })
      );
  }

  render() {
    const { orderList, total } = this.state;
    return (
      <table className="Order">
        <tbody>
          <tr>
            <th>Product</th>
            <th>Subtotal</th>
          </tr>
          <OrderItem orderList={orderList} />
          <tr>
            <td>Subtotal</td>
            <td>${total}</td>
          </tr>
          <tr className="shipping">
            <td>Shipping</td>
            <td>$9</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${total + 9}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Order;
