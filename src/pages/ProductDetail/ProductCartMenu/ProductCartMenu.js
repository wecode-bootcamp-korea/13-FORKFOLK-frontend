import React, { Component } from 'react';
import './ProductCartMenu.scss';
import {BASKET_API} from "../../../config"

class ProductCartMenu extends Component {
    constructor() {
        super();
        this.state = {
            countProduct: 0,
            totalPrice: 0,
            clientToken: null,
        }
    }

    changeCountProduct = (e)=> {
        const { countProduct } = this.state;
        let count = countProduct;
        e.target.name === "plus" ? count++ : count--;
        if (count < 0 ) count = 0;
        this.setState( { countProduct:  count , totalPrice:this.props.price*count,clientToken:localStorage.getItem('user-token')});
    }

    moveToBasket = () => {
        const { id, countProduct,clientToken } = this.props;
            fetch(BASKET_API, {
                method: "POST",
                body: JSON.stringify({
                    product_id : id,
                    quantity : countProduct
                }),
                headers: {
                    'Authorization':  clientToken,
                  }
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    this.props.history.push(`/cart/`);
                });
        }


    render() {
        const { countProduct,totalPrice } = this.state;
    return (
        <div className="productCartMenu">
            <div className="countContainer">
                <span>{countProduct}</span>
                <button name="minus" onClick={this.changeCountProduct}>-</button>
                <button name="plus" onClick={this.changeCountProduct}>+</button>
            </div >
            <div className="totalContainer" ><span>Total Price</span><span>${totalPrice}</span></div>
            <div className="cartContainer" onClick="">Add to basket</div>
        </div>
        );
    }
}

export default ProductCartMenu;
