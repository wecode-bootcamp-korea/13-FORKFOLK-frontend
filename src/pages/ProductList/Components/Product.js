import React, { Component } from 'react'
import "./Product.scss"

class Product extends Component {
    render() {
        const { product, filterByCategory } = this.props;
        return (
            <li key={product.id} className="Product">
                <img src={product.image} alt="상품 이미지" />
                <button 
                onClick={() => filterByCategory(product.category)} 
                category={product.category}>
                    {product.category}
                </button>
                <p>{product.description}</p>
                <div>{product.price}</div>
            </li>
        )
    }
}

export default Product
