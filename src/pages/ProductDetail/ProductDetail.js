import React, { Component } from 'react';
import ProductTumbnail from './ProductThumbnail/ProductTumbnail'
import ProductDescription from './ProductDescription/ProductDescription'
import ProductCartMenu from  './ProductCartMenu/ProductCartMenu'
import './ProductDetail.scss';

class ProductDetail extends Component {
    constructor() {
        super();
        this.state = {
            headerCategory: ["SHOP :", "ALL", "ART PRINTS", "BOOKS", "MAGAZINE", "NOTECARDS", "SUBCRIPTIONS"],
            productInfo: {
                id: null,
                productImg :[],
                productName: "",
                price: "",
                descriptions: [
                    {
                        kategory : "",
                        text :""
                    },
                    {
                        kategory : "",
                        text :""
                    }
                ],
            },
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/Data/ProductDetailData.json', {
       
        }).then(res => res.json())
          .then(res => {
            this.setState({
                productInfo : res.product
            });
          });
      }

    render() {
        const { headerCategory, productInfo:{id,productImg,productName,price,descriptions}} = this.state;
        return (
            <div className='ProductDetail'>
                <header>
                    <ul>
                        {headerCategory.map(el =><li><button>{el}</button></li>)}
                    </ul>
                </header>
                <section>
                    <ProductTumbnail productImg={productImg} />
                    <aside>
                    <ProductDescription id={id} productName={productName} price={price} descriptions={descriptions}  />
                        <ProductCartMenu price={price} />
                        </aside>
                </section>
            </div>
        )
    }
}

export default ProductDetail
