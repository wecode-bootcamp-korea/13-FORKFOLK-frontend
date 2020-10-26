import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import Product from "../ProductList/Components/Product"
import CartProduct from "../CartList/Components/CartProduct"
import { APIROOT } from "../../config";
import "./CartList.scss";
import { FaChevronDown } from "react-icons/fa";
import { map } from "async";



export default class CartList extends Component {
    constructor() {
        super();
        this.state = {
            cartProducts: [],
            interestingProducts: [],
            backCartProducts: [{productId: 1, quantity: 1}, {productId: 2, quantity: 1}]
        }
    }

    componentDidMount() {
        console.log("CDM")
        const APIOfCartList = `${APIROOT}/Data/cartList.json`;

        Promise.all([
            fetch(APIOfCartList)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        cartProducts: res.cartData,
                        interestingProducts: res.interestingProducts
                    })
                })
                .catch(err => console.log("err.message", err.message))
        ])
    }

    deleteProduct = (e) => {
        console.log("e.target", e.target.id)
        
        const { cartProducts } = this.state;
        
        const filteredCart = cartProducts.length && cartProducts.filter(product => {
            return product.id !== Number(e.target.id);
        });

        this.setState({
            cartProducts: [...filteredCart]
        });
    };

    changeQuantity = (e, id) => {
        console.log("Quantity is changed!!")
        const { value } = e.target;
        const { cartProducts } = this.state;
        // console.log(e)
        // console.log(e.target)
        console.log(e.target.value)
        console.log(id)
        console.log(this.state.cartProducts[1].id)

        const changedProductId = cartProducts.length && cartProducts.filter(product => {
            if (product.id === id) {
                    // return product.id: id,
                    let obj = {producId : product.id, quantity:e.target.value};
               
                //    this.setState({backcCartProducts:[...this.state.backcCartProducts, ...obj]}) 
            }

            return 
        })
        
        // this.setState({
        //     cartProducts.id.quantity: value
        // })

    }

    render() {
        const { cartProducts, interestingProducts, backcCartProducts } = this.state;

        if (cartProducts.length === 0) {
            return (
                <div className="CartList">
                    <div className="container">
                        <div className="emptyModule">
                            <h1>Cart</h1>
                            <p>Your basket is currently empty.</p>
                            <button onClick={() => this.props.history.push("/shop/")}>Return to shop</button>
                        </div>
                    </div>
                </div>
            )
        }

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
                        <div className="centerAndRigth">
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
                                                <CartProduct 
                                                key={i}
                                                product={product}
                                                />
                                            )
                                        })}
                                        <tr>
                                            <td colSpan="6">
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
                                <table cellSpacing="0">
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
                                    </tbody>
                                </table>
                                <div>
                                    <button>
                                        PROCEED TO CHECKOUT
                                    </button>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <div className="crossSells">
                        <h2>You may be interested in...</h2>
                        <ul>
                            {interestingProducts.map((product, i) =>
                            <Product 
                                key={i}
                                product={product}
                                />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
