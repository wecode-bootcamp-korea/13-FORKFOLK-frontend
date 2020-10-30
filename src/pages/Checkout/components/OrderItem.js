import React, { Component } from "react";

class OrderItem extends Component {
  render() {
    return (
      <>
        {this.props.orderList.length !== 0 &&
          this.props.orderList.map((order) => {
            return (
              <tr key={order.id}>
                <td>
                  {order.name} x {order.quantity}
                </td>
                <td>${order.price * order.quantity}</td>
              </tr>
            );
          })}
      </>
    );
  }
}
export default OrderItem;
