import React, { Component } from 'react';
import './ProductCartMenu.scss';

class ProductCartMenu extends Component {
    constructor() {
        super();
        this.state = {
            countProduct: 0,
            totalPrice: 0
        }
    }

    ChangeCountProduct = (e)=> {
        const { countProduct } = this.state;
        let count = countProduct;
        e.target.name === "plus" ? count++ : count--;
        if (count < 0 ) count = 0;
        this.setState( { countProduct:  count , totalPrice:this.props.price*count});
    }

    render() {
        const { countProduct,totalPrice } = this.state;
    return (
        <div className="productCartMenu">
            <div className="countContainer">
                <span>{countProduct}</span>
                <button name="minus" onClick={this.ChangeCountProduct}>-</button>
                <button name="plus" onClick={this.ChangeCountProduct}>+</button>
            </div >
            <div className="totalContainer" ><span>Total Price</span><span>${totalPrice}</span></div>
            <div className="cartContainer">Add to basket</div>
        </div>
        );
    }
}

export default ProductCartMenu;
