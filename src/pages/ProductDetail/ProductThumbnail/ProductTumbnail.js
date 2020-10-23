import React, { Component } from 'react';
import './ProductTumbnail.scss';
import FadeIn from 'react-fade-in';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            productImgIdx: 0,
        }
    }

    changeproductImgIdx = (e) => {
        const { productImgIdx } = this.state;
        let Idx = productImgIdx;
        e.target.name === "R" ? Idx++ : Idx--;
        if (Idx < 0) Idx = 3;
        if (Idx > 3) Idx = 0;
        this.setState({ productImgIdx: Idx } );
    }

    render() {
        const { productImg } = this.props;
        const { productImgIdx } = this.state;
        console.log(productImgIdx);
        return (
            <div className="ProductThumbnail" >
                <img className="fadein" src={productImg[productImgIdx]} />
                <button name="L" onClick = {this.changeproductImgIdx} className="ProductThumbnailLeftBtn"></button>
                <button name="R" onClick = {this.changeproductImgIdx} className="ProductThumbnailRightBtn"></button>
            </div>
        );
    }
}

export default Product;
