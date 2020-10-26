import React, { Component } from "react";
import Product from "./Components/Product"
import "./ProductList.scss"
import { APIROOT } from "../../config"


class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      filterList: [],
      allProducts: [],
      productsByCategory: [],
      productsByPage: [],
      mappingPage: false,
      isPrevBtnVisible: false,
      isNextBtnVisible: true,
      isPageFooterVisible: true,
    }
  }

  componentDidMount() {
    const APIOfProductFilterList = `${APIROOT}/Data/productFilterList.json`;
    const APIOfProductList = `${APIROOT}/Data/productList.json`;

    Promise.all([
      fetch(APIOfProductFilterList)
        .then(res => res.json())
        .then(res => {
          this.setState({
            filterList: res.filterList,
          })
        })
        .catch(err => console.log("err.message", err.message)),

      fetch(APIOfProductList)
        .then(res => res.json())
        .then(res => {
          this.setState({
            allProducts: res.products,
            productsByCategory: res.products
          })
        })
        .catch(error => console.log(error.message))
    ])
  }

  componentDidUpdate() {
    fetch(`http://localhost:3000//shop/${this.props.match.params.id}`);
  }

  filterByCategory = (category) => {
    const { allProducts } = this.state;
    const categoryName = {
      "ART PRINTS" : "art-prints",
      "BOOKS" : "books",
      "MAGAZINE" : "kinfolk-magazines",
      "NOTECARDS" : "notecards",
      "SUBSCRIPTIONS" : "subscriptions",
    }

    if (category === "ALL") {
      return this.setState({
        productsByCategory: [...allProducts],
        mappingPage : false,
        isPageFooterVisible: true
      }, () => {this.props.history.push(`/shop?category=All&page=1`)} )
    }

    const filteredProducts = allProducts.filter(product => {
      return product.category === category;
    })
    this.setState({isPageFooterVisible: filteredProducts.length < 13,
      productsByCategory: [...filteredProducts],
      productsByPage: [...filteredProducts],
      isPageFooterVisible: false}, () => {this.props.history.push(`/product?category=${categoryName[category]}`)})

    // 10/28 수요일에 백엔드 분들과 맞춰볼 예정입니다.
    // fetch(`http://`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     endpoint: `/product?category=${categoryName[category]}`
    //   })
    // })
    //   .then(res => res.json())
    //   .then(result => console.log("endpoint", result))
  }

  filterByPage = (num) => {
    const { productsByCategory } = this.state;
    const slicePageIdx = num === 1 ? [0, 12] : num === 2 ? [12, 24] : num === 3 ? [24, 36] : [36];
    const prevBtnBool = num === 1 ? false : num === 2 || num === 3 ? true : true;
    const nextBtnBool = num === 1 ? true : num === 2 || num === 3 ? true : false;

    this.setState({
      productsByPage : productsByCategory.slice(...slicePageIdx),
      mappingPage : true,
      isPrevBtnVisible : prevBtnBool,
      isNextBtnVisible : nextBtnBool
    }, () => {this.props.history.push(`/shop?category=all&page=${num}`)})
  }

  goToProductDetail = (id) => {
    console.log(this.props.history)
    this.props.history.push(`/shop/${id}`)
  }
 
  render() {
    const {filterList, productsByCategory, productsByPage, mappingPage, isPrevBtnVisible, isNextBtnVisible, isPageFooterVisible } = this.state;
    const mappingPageIn = mappingPage ? productsByPage : productsByCategory

    return (
      <div className="ProductList">
        <div className="pageHeader">
          <ul>
          <span>SHOP:</span>
            {filterList.map(list => {
              return (
                <li key={list.id}>
                  <button onClick={() => this.filterByCategory(list.category)}>{list.category}</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="products">
          <content>
            <ul>
              {
                mappingPageIn.length > 12 ?
                  mappingPageIn.slice(0, 12).map((product, i) => {
                    return (
                      <Product 
                      key={i}
                      product={product}
                      filterByCategory={this.filterByCategory}
                      goToProductDetail={this.goToProductDetail}
                      />
                    )
                  }) 
                :
                mappingPageIn.map((product, i) => {
                  return (
                    <Product 
                    key={i}
                    id={product.id}
                    product={product}
                    filterByCategory={this.filterByCategory}
                    goToProductDetail={this.goToProductDetail}
                    />
                  )
                })
              }
            </ul>
          </content>
        </div>
        <div className={isPageFooterVisible ? "pageFooter" : "invisiblePageFooter"}>
          <span>
            <button 
              className={isPrevBtnVisible ? "": "invisible"} 
              onClick={() => {this.filterByPage(1);}}>
              PREV
            </button>
            <button 
              onClick={() => {this.filterByPage(1);}}>
              1
            </button>
            <button 
              onClick={() => {this.filterByPage(2);}}>
              2
            </button>
            <button 
              onClick={() => {this.filterByPage(3);}}>
              3
            </button>
            <button 
              onClick={() => {this.filterByPage(4);}}>
              4
            </button>
            <button 
              className={isNextBtnVisible ? "" : "invisible"} 
              onClick={() => {this.filterByPage(4);}}>
              NEXT
            </button>
          </span>
        </div>
      </div>    
    )
  }
};

export default ProductList;