import React, { Component } from 'react'
import { FaRegTimesCircle } from "react-icons/fa";

export default class CartProduct extends Component {
    render() {
        const { product } = this.props;
        return (
            <tr className="cartProducts" key={product.id}>
                <td>
                    <img src={product.image} alt="장바구니 상품"/>
                </td>
                <td>
                    {product.title}
                </td>
                <td>
                    ${product.price}
                </td>
                <td>
                    <select value={product.quantity} 
                    // onChange={(e) => this.changeQuantity(e, product.id)} 
                    // onChange={this.changeQuantity}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </td>
                <td>
                    ${product.price}
                </td>
                <td>
                    <button id={product.id} className="delBtn" onClick={this.deleteProduct}>
                        <FaRegTimesCircle className="delIcon" />
                    </button>
                </td>
            </tr>
        )
    }
}