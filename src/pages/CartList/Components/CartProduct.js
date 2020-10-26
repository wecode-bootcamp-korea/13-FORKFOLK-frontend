import React, { Component } from 'react'
import { APIROOT } from "../../../config"
import { FaRegTimesCircle } from "react-icons/fa";

export default class CartProduct extends Component {
    constructor() {
        super();
        this.state = {
            product: {},
            eachId: 0,
            prevQuantity: 0,
            eachQuantity: 0,
            eachTotalPrice: 0
        }
    }

    componentDidMount() {
        this.setState({
            product: this.props.product
        })
    }

    changeQuantity = (e) => {
        const { value } = e.target;
        const { id, image, title, quantity, price } = this.state.product;

        this.setState({
            product: { 
                id,
                image,
                title,
                quantity: value,
                price
            },
            eachId: id,
            prevQuantity: quantity,
            eachQuantity: value,
            eachPrice: price,
            eachTotalPrice: Number(price * value)
        }, this.toSendDataToParent)

        // 백엔드와 맞춰본 후 주석 해제할 예정입니다.
        // fetch(APIROOT, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         product_id: id, quantity: value
        //     })
        // })
        //     .then(res => res.json())
        //     .then(result => console.log(result))
    }

    deleteProduct = (e, id) => {        
        console.log(`id ${id} is deleted!!`);

        //백엔드와 맞춰본 후 주석 해제할 예정입니다.
        // const { cartProducts } = this.state;
        // const filteredCart = cartProducts.length && cartProducts.filter(product => {
        //     return product.id !== Number(e.target.id);
        // });
        // this.setState({
        //     cartProducts: [...filteredCart]
        // });

        // fetch(APIROOT, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         removed_product_id: id
        //     })
        // })
        //     .then(res => res.json())
        //     .then(result => console.log(result))
    };

    toSendDataToParent = () => {
        const { eachId, prevQuantity, eachQuantity, eachPrice, eachTotalPrice } = this.state;
        this.props.onSubmit(eachId, prevQuantity, eachQuantity, eachPrice, eachTotalPrice)
    }

    render() {
        const { product } = this.state;
        const optionValue = [ 
            {value:1, outputNum:1}, 
            {value:2, outputNum:2}, 
            {value:3, outputNum:3}, 
            {value:4, outputNum:4}, 
            {value:5, outputNum:5}, 
            {value:6, outputNum:6}, 
            {value:7, outputNum:7}, 
            {value:8, outputNum:8}, 
            {value:9, outputNum:9} 
        ]
        
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
                    <form onSubmit={this.toSendDataToParent}>
                        <select value={product.quantity} 
                        onChange={(e) => this.changeQuantity(e, product.id)} 
                        >
                            {optionValue.map((eachOption, i) => {
                                return (
                                    <option key={i} value={eachOption.value}>{eachOption.outputNum}</option>
                                )
                            })}
                        </select>
                    </form>
                </td>
                <td>
                    ${(product.price) * (product.quantity)}
                </td>
                <td>
                    <button id={product.id} className="delBtn" onClick={(e) => this.deleteProduct(e, product.id)}>
                        <FaRegTimesCircle className="delIcon" />
                    </button>
                </td>
            </tr>
        )
    }
}