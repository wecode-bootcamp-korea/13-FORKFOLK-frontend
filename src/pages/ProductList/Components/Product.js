import React, { Component } from 'react'
import "./Product.scss"

class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <li key={product.id} className="Product">
                <img src={product.image}/>
                <button>{product.category}</button>
                <p>{product.description}</p>
                <div>{product.price}</div>
            </li>
        )
    }
}

export default Product
