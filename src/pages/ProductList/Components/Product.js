import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Product.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

class Product extends Component {
    constructor() {
        super();
        this.state = {
            isFullHeartBool : false
        }
    }

    isChangeHeartColor = () => {
        const { isFullHeartBool } = this.state;
        if (isFullHeartBool === false) {
            this.setState({
                isFullHeartBool : true
            })
        }
         else {
            this.setState({
                isFullHeartBool : false
            })
        }
    }

    render() {
        const { isFullHeartBool } = this.state;
        const { product, filterByCategory, goToProductDetail } = this.props;
        return (
            <li id={product.id} className="Product">
                <div className="imageContainer">
                    <button onClick={() => {goToProductDetail(product.id)}}>
                        <img className="productImage" src={product.image} alt="상품 이미지" />
                    </button>
                    <button className="heartIcon" onClick={this.isChangeHeartColor}>
                        { isFullHeartBool ? 
                            <FaHeart className="fullHeart" /> 
                            : 
                            <FaRegHeart className="emptyHeart" /> }
                    </button>
                    <button className="addToCart">
                        <Link to="/cart/">Add to Cart</Link>
                    </button>
                </div>
                <button 
                    className="category"
                    onClick={() => filterByCategory(product.category)} 
                    category={product.category}>
                        {product.category}
                </button>
                <p>{product.description}</p>
                <div>${product.price}</div>
            </li>
        )
    }
}

export default Product;
