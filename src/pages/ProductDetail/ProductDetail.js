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
        image: [],
        name: "",
        price: "",
        descriptions: {
          description: "",
          shipping: "",
        },
      },
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Data/ProductDetailData.json", {})
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productInfo: res.product_info,
        });
      });
  }

  // componentDidMount() {
  //   fetch(`${PRODUCT_DETAIL_API}${this.props.match.params.id}`, {})
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({ productInfo: res.product_info });
  //     });
  // }

  render() {
    const {
      productInfo: { id, image, name, price, descriptions },
    } = this.state;
    console.log(image);
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
          {Object.keys(this.state.productInfo.image).length && (
            <ProductTumbnail productImg={image} />
          )}
          <aside>
            <ProductDescription
              id={id}
              productName={name}
              price={price}
              descriptions={descriptions}
            />
            <ProductCartMenu id={id} price={price} />
          </aside>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
