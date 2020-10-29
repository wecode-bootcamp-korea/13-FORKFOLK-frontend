import React, { Component } from "react";
import ProductTumbnail from "./ProductThumbnail/ProductTumbnail";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductCartMenu from "./ProductCartMenu/ProductCartMenu";
import { PRODUCT_DETAIL_API } from "../../config";
import "./ProductDetail.scss";

const HEADER_CATEGORYS = [
  "SHOP :",
  "ALL",
  "ART PRINTS",
  "BOOKS",
  "MAGAZINE",
  "NOTECARDS",
  "SUBCRIPTIONS",
];

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: {
        id: null,
        productImg: [],
        productName: "",
        price: "",
        descriptions: [
          {
            kategory: "",
            text: "",
          },

          {
            kategory: "",
            text: "",
          },
        ],
      },
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Data/ProductDetailData.json", {})
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productInfo: res.product,
        });
      });
  }

  // componentDidMount() {
  //     fetch(`${PRODUCT_DETAIL_API}/${this.props.match.params.id}`,
  //         {
  //     }).then(res => res.json())
  //         .then(res => {
  //         this.setState({productInfo:res})
  //     })
  //   }

  render() {
    const {
      productInfo: { id, productImg, productName, price, descriptions },
    } = this.state;
    return (
      <div className="productDetail">
        <header>
          <ul>
            {HEADER_CATEGORYS.map((headerCategory) => (
              <li>
                <button>{headerCategory}</button>
              </li>
            ))}
          </ul>
        </header>
        <section>
          <ProductTumbnail productImg={productImg} />
          <aside>
            <ProductDescription
              id={id}
              productName={productName}
              price={price}
              descriptions={descriptions}
            />
            <ProductCartMenu price={price} />
          </aside>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
