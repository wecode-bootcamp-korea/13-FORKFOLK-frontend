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

    addToCart = (id, name, price) => {
        console.log(id, name, price, 1)
        // 10/28 수요일에 백엔드와 맞춰본 후 주석 해제할 예정입니다.
        // fetch(APIROOT, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         product_id: id, 
        //         name: name,
        //         price: price,
        //         quantity: 1
        //     })
        // })
        //     .then(res => res.json())
        //     .then(result => console.log(result))
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
                    <button className="addToCart" onClick={() => this.addToCart(product.id, product.name, product.price, product.quantity)}>
                        Add to Cart
                    </button>
                </div>
                <button 
                    className="category"
                    onClick={() => filterByCategory(product.category)} 
                    category={product.category}>
                        {product.category}
                </button>
                <p>{product.name}</p>
                <div>${product.price}</div>
            </li>
        )
    }
}

export default Product;
