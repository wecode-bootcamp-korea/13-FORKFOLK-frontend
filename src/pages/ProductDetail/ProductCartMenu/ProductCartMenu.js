import React, { Component } from 'react';
import './ProductCartMenu.scss';

class ProductCartMenu extends Component {



render() {
    return (
        <div className="ProductCartMenu">
            <div>
                <span>3</span>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
        );
    }
}

export default ProductCartMenu;
