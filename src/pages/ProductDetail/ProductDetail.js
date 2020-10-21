import React, { Component } from 'react';
import ProductTumbnail from './ProductThumbnail/ProductTumbnail'
import ProductDescription from './ProductDescription/ProductDescription'
import ProductCartMenu from  './ProductCartMenu/ProductCartMenu'
import './ProductDetail.scss';

class ProductDetail extends Component {
    constructor() {
        super();
        this.state = {
            headerCategory : ["SHOP :","ALL","ART PRINTS","BOOKS","MAGAZINE","NOTECARDS","SUBCRIPTIONS"]
        }
    }
    render() {
        const { headerCategory } = this.state;
        return (
            <div className='ProductDetail'>
                <header>
                    <ul>
                        {headerCategory.map(el =><li><button>{el}</button></li>)}
                    </ul>
                </header>
                <section>
                    <ProductTumbnail />
                    <aside>
                    <ProductDescription />
                        <ProductCartMenu />
                        </aside>
                </section>
            </div>
        )
    }
}

export default ProductDetail
