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
    fetch(`${PRODUCT_DETAIL_API}${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ productInfo: res.product_info });
      });
  }

  goToBasket = () => {
    this.props.history.push(`/cart/`);
  };

  render() {
    const {
      productInfo: { id, image, name, price, descriptions },
    } = this.state;
    return (
      <div className="productDetail">
        <header>
          <ul>
            {HEADER_CATEGORYS.map((headerCategory) => (
              <li>
                <button name={headerCategory} onClick={this.goToShop}>
                  {headerCategory}
                </button>
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
            <ProductCartMenu
              id={id}
              price={price}
              goToBasket={this.goToBasket}
            />
          </aside>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
