import React, { Component } from 'react'
import './ProductDetail.scss'

class ProductDetail extends Component {
    constructor() {
        super();
        this.state = {
            headerCategory : ["ALL","ART PRINTS","BOOKS","MAGAZINE","NOTECARDS","SUBCRIPTIONS"]
        }
    }
    render() {
        const { headerCategory } = this.state;
        return (
            <div className='ProductDetail'>
                <header>
                    <span>SHOP:</span>
                    <ul>
                        {headerCategory.map(el =>
                            <li><button>{el}</button></li>
                                )}
                    </ul>
                </header>
            </div>
        )
    }
}

export default ProductDetail
