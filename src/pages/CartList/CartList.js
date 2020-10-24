import React, { Component } from "react";
import { Link } from "react-router-dom";
import { APIROOT } from "../../config";
import "./CartList.scss";
import { FaChevronDown } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { map } from "async";



export default class CartList extends Component {
    constructor() {
        super();
        this.state = {
            cartProducts: [],
            interestingProducts: []

        }
    }

    componentDidMount() {
        const APIOfCartList = `${APIROOT}/Data/cartList.json`
        const APIOfProductList = `${APIROOT}/Data/productList.json`

        Promise.all([
            fetch(APIOfCartList)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        cartProducts: res.cartData
                    })
                })
                .catch(err => console.log("err.message", err.message)),
            
            fetch(APIOfProductList)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        interestingProducts: res.products
                    })
                })
        ])
        
    }

    render() {
        const { cartProducts } = this.state;
        return (
            <div className="CartList">
                <div className="container">
                    <div className="module">
                        <h1>Cart</h1>
                    </div>
                    <div className="commerce">
                        <div className="leftSection">
                            <Link to="/shop/">
                                ◀ BACK TO SHOP
                            </Link>
                        </div>
                        <div className="centerSection">
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="2">
                                            Product
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Quantity
                                        </th>
                                        <th colSpan="2">
                                            Total (USD)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartProducts.map((product, i) => {
                                        return (
                                            <tr key={product.id}>
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
                                                    <select>
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
                                                    <FaRegTimesCircle />
                                                </td>
                                            </tr>
                                                )
                                    })}
                                    <tr>
                                        <td colspan="6">
                                            <div>
                                                <input className="couponCode"
                                                 type="text" placeholder="Coupon code">
                                                </input>
                                                <input className="applyCoupon" type="submit" value="APPLY COUPON">
                                                </input>
                                            </div>
                                            <div>
                                                <input className="updateBasket" type="submit" value="UPDATE BASKET">
                                                </input>
                                            </div>   
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="rightSection">
                            <h2>Basket totals</h2>
                            <table cellspacing="0">
                                <tbody>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>
                                            <span>
                                                ${218}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Shipping
                                        </th>
                                        <td>
                                            <ul>
                                                <li>
                                                    ${29}
                                                </li>
                                                <li>
                                                    Shipping Ooptions will be updated during checkout.
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td>${247}</td>
                                    </tr>
                                    <tr>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <button>
                                    PROCEED TO CHECKOUT
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="crossSells">
                        <h2>You may be interested in...</h2>
                        <ul>
                            {/* {APIOfProductList.map}
                            {api 검색해서 map 돌리기 }
                            <li></li> */}
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}
