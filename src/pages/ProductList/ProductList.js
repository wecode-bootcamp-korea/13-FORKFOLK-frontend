import React, { Component } from "react";
import Product from "./Components/Product";
import "./ProductList.scss";
import { JINAPIROOT } from "../../config";
import { BEAPIROOT } from "../../config";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      filterList: [],
      allProducts: [],
      isPrevBtnVisible: false,
      isNextBtnVisible: true,
      isPageFooterVisible: true,
      currentCategory: "ALL",
      currentPage: 1,
      animationActive: false,
    };
  }

  componentDidMount() {
    const APIOfProductFilterList = `${JINAPIROOT}/Data/productFilterList.json`;
    // const APIOfProductList = `${JINAPIROOT}/Data/productList.json`;
    const backendAPI = `${BEAPIROOT}/products?category=All&page=1`;

    Promise.all([
      fetch(APIOfProductFilterList)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            filterList: res.filterList,
          });
        })
        .catch((err) => console.log("err.message", err.message)),

      fetch(backendAPI)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            allProducts: res.page_products,
            animationActive: false,
          });
        })
        .catch((err) => console.log("err.message", err.message)),
    ]);
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    const { currentCategory, currentPage } = this.state;

    if (prevProps.location.search !== search) {
      this.filterByCategory(currentCategory, currentPage);
      this.setState({
        animationActive: true,
      });
    }
  }

  filterByCategory = async (category, num) => {
    const categoryName = {
      ALL: "All",
      "ART PRINTS": "artprint",
      artprint: "artprint",
      BOOKS: "books",
      books: "books",
      MAGAZINE: "magazine",
      magazine: "magazine",
      NOTECARDS: "notecards",
      notecards: "notecards",
      SUBSCRIPTIONS: "subscriptions",
      subscriptions: "subscriptions",
    };

    if (category === "ALL") {
      const res = await fetch(
        `${BEAPIROOT}/products?category=${categoryName[category]}&page=${num}`,
      );
      const { page_products } = await res.json();

      this.setState(
        {
          allProducts: page_products,
          isPageFooterVisible: true,
          currentCategory: category,
          currentPage: num,
          animationActive: false,
        },
        () => {
          this.props.history.push(`/products?category=${categoryName[category]}&page=${num}`);
        },
      );
      return;
    }

    const res = await fetch(`${BEAPIROOT}/products?category=${categoryName[category]}&page=${num}`);
    const { page_products } = await res.json();
    this.setState(
      {
        allProducts: page_products,
        isPageFooterVisible: false,
        currentCategory: category,
        animationActive: false,
      },
      () => {
        this.props.history.push(`/products?category=${categoryName[category]}&page=${num}`);
      },
    );
    return;
  };

  goToProductDetail = (id) => {
    this.props.history.push(`/shop/${id}`);
  };

  goToCartPage = () => {
    this.props.history.push(`/cart`);
  };

  render() {
    const {
      filterList,
      allProducts,
      isPrevBtnVisible,
      isNextBtnVisible,
      isPageFooterVisible,
      currentCategory,
      currentPage,
      animationActive,
    } = this.state;

    const PAGENUMS = [{ pageNum: 1 }, { pageNum: 2 }, { pageNum: 3 }, { pageNum: 4 }];

    return (
      <div className="ProductList">
        <div className="pageHeader">
          <ul>
            <span>SHOP:</span>
            {filterList.map((list) => {
              return (
                <li
                  className={currentCategory === list.category ? "underlineActive" : null}
                  key={list.id}
                >
                  <button onClick={() => this.filterByCategory(list.category, 1)}>
                    {list.category}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="products">
          <content className={animationActive ? "" : "animationActive"}>
            <ul>
              {allProducts.length &&
                allProducts.map((product, i) => {
                  return (
                    <Product
                      key={i}
                      id={product.id}
                      product={product}
                      filterByCategory={this.filterByCategory}
                      goToProductDetail={this.goToProductDetail}
                      goToCartPage={this.goToCartPage}
                    />
                  );
                })}
            </ul>
          </content>
        </div>
        <div className={isPageFooterVisible ? "pageFooter" : "invisiblePageFooter"}>
          <span>
            <button
              className={isPrevBtnVisible ? "" : "invisible"}
              onClick={() => {
                this.filterByCategory("ALL", 1);
              }}
            >
              PREV
            </button>
            {PAGENUMS.map((num, i) => {
              return (
                <button
                  key={i}
                  className={currentPage === num.pageNum ? "underlineActive" : null}
                  onClick={() => {
                    this.filterByCategory("ALL", num.pageNum);
                  }}
                >
                  {num.pageNum}
                </button>
              );
            })}
            <button
              className={isNextBtnVisible ? "" : "invisible"}
              onClick={() => {
                this.filterByCategory("ALL", 4);
              }}
            >
              NEXT
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default ProductList;
