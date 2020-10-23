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

  filterByCategory = (category) => {
    const { allProducts } = this.state;
    if (category === "ALL") {
      this.setState({
        productsByCategory: [...allProducts],
        mappingPage : false,
        isBtnVisible: true,
        isPageFooterVisible: true
      })
    } 
    if (category !== "ALL") {
      const filteredProducts = allProducts.filter( product => {
        return product.category === category;
      })
      this.setState({
        productsByCategory: [...filteredProducts],
        productsByPage: [...filteredProducts]
      })
      this.setState(filteredProducts.length < 13 ? {isPageFooterVisible: false} : {isPageFooterVisible: true})
    }
  }

  filterByPage = (num) => {
    const { productsByCategory } = this.state;
    if (num === 1) {
      this.setState({ 
        productsByPage : productsByCategory.slice(0, 12),
        mappingPage : true,
        isPrevBtnVisible: false,
        isNextBtnVisible: true,
      })
    }
    if (num === 2) {
      this.setState({ 
        productsByPage : productsByCategory.slice(12, 24),
        mappingPage : true,
        isPrevBtnVisible: true,
        isNextBtnVisible: true,
      })
    }
    if (num === 3) {
      this.setState({ 
        productsByPage : productsByCategory.slice(24, 36),
        mappingPage : true,
        isPrevBtnVisible: true,
        isNextBtnVisible: true,
      })
    }
    if (num === 4) {
      this.setState({ 
        productsByPage : productsByCategory.slice(36),
        mappingPage : true,
        isPrevBtnVisible: true,
        isNextBtnVisible: false,
      })
    }
  }
 
  render() {
    const {filterList, productsByCategory, productsByPage, mappingPage, isPrevBtnVisible, isNextBtnVisible, isPageFooterVisible } = this.state;
    const mappingPageIn = mappingPage ? productsByPage : productsByCategory

    // if (!this.state.어쩌구) return <div>roading.....</div>

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
