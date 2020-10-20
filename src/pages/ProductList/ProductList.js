import React, { Component } from "react";
import Product from "./Components/Product"
import "./ProductList.scss"

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      filterList: [],
      allProducts: [],
      productsByCategory: [],
      productsByPage: [],
      mappingPage: false,
      isBtnVisible: true,
      isPageFooterVisible: true,
      offset: 0
    }
  }

  componentDidMount() {
    const LIMIT = 12;
    const APIOfProductFilterList = `http://localhost:3000/Data/productFilterList.json`;
    const APIOfProductList = `http://localhost:3000/Data/productList.json?limit=${LIMIT}&offset=${this.state.offset}`;
    // pagination(limit, offset)은 추후 시도 예정입니다.

    Promise.all([
      fetch(APIOfProductFilterList, {method: "GET"})
        .then(res => res.json())
        .then(res => {
          this.setState({
            filterList: res.filterList,
          });
        }).catch(error => console.log(error.message)),

      fetch(APIOfProductList, {method: "GET"})
        .then(res => res.json())
        .then(res => {
          this.setState({
            allProducts: res.products,
            productsByCategory: res.products
          })
        })
    ])
  }

  filterByCategory = (category) => {
    if (category === "ALL") {
      this.setState({
        productsByCategory: [...this.state.allProducts],
        mappingPage : false,
        isBtnVisible: true,
        isPageFooterVisible: true
      })
    } 
    else {
      const filtering = this.state.allProducts.filter(product => {
        return product.category === category;
      })
      if (filtering.length < 13) {
        this.setState({isPageFooterVisible: false})
      } else {
        this.setState({isPageFooterVisible: true})
      }
      this.setState({
        productsByCategory: [...filtering],
        productsByPage: [...filtering]
      })
    }
  }

  filterByPage = (num) => {
    const { productsByCategory } = this.state;
    if (num === 1) {
      this.setState({ 
        productsByPage : productsByCategory.slice(0, 12),
        mappingPage : true 
      })
    }
    if (num === 2) {
      this.setState({ 
        productsByPage : productsByCategory.slice(12),
        mappingPage : true })
    }
  }

  isChangeBtnBool = (num) => {
    if (num === 1) {
      this.setState({ isBtnVisible: true });
    }
    if (num === 2) {
      this.setState({ isBtnVisible: false });
    }
  }
 
  render() {
    const {filterList, productsByCategory, productsByPage, mappingPage, isBtnVisible, isPageFooterVisible } = this.state;
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
                      />
                    )
                  }) 
                :
                mappingPageIn.map((product, i) => {
                  return (
                    <Product 
                    key={i}
                    product={product}
                    filterByCategory={this.filterByCategory}
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
              className={isBtnVisible && "prev"} 
              onClick={() => {this.isChangeBtnBool(1); this.filterByPage(1);}}>
              PREV
            </button>
            <button 
              onClick={() => {this.isChangeBtnBool(1); this.filterByPage(1);}}>
              1
            </button>
            <button 
              onClick={() => {this.isChangeBtnBool(2); this.filterByPage(2);}}>
              2
            </button>
            <button 
              className={!isBtnVisible && "next"} 
              onClick={() => {this.isChangeBtnBool(2); this.filterByPage(2);}}>
              NEXT
            </button>
          </span>
        </div>
      </div>    
    )
  }
};

export default ProductList;
