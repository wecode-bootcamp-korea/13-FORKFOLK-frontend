import React, { Component } from 'react';
import './ProductCartMenu.scss';

class ProductCartMenu extends Component {
    constructor() {
        super();
        this.state = {
            countProduct: 0
        }
    }
    ChangeCountProduct(e) {
        const { countProduct } = this.state;
        this.setState(e.target.name === "plus" ? { countProduct: countProduct++ } : { countProduct: countProduct-- });
    }

    render() {
        const { countProduct } = this.state;
    return (
        <div className="ProductCartMenu">
            <div>
                <span>{countProduct}</span>
                <button name="plus" onClick={this.ChangeCountProduct}>-</button>
                <button name="minus" onClick={this.ChangeCountProduct}>+</button>
            </div>
        </div>
        );
    }
}

export default ProductCartMenu;
