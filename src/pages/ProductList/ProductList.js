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
    // console.log("CDM 돕니당")
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
    // console.log("CDU 돕니당")
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
      }, () => {this.props.history.push('/shop/')} 
      
      )
    } 
      const filteredProducts = allProducts.filter( product => {
        return product.category === category;
      })
      this.setState({isPageFooterVisible: filteredProducts.length < 13,
        productsByCategory: [...filteredProducts],
        productsByPage: [...filteredProducts],
        isPageFooterVisible: false}, () => {this.props.history.push(`/product-category/${categoryName[category]}/`)})
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
    })

    // if (num === 1) {
    //   this.setState({ 
        
    //     isPrevBtnVisible: false,
    //     isNextBtnVisible: true,
    //   }, () => {})
    // }
    // if (num === 2) {
    //   this.setState({ 
    //     productsByPage : productsByCategory.slice(12, 24),
    //     mappingPage : true,
    //     isPrevBtnVisible: true,
    //     isNextBtnVisible: true,
    //   })
    // }
    // if (num === 3) {
    //   this.setState({ 
    //     productsByPage : productsByCategory.slice(24, 36),
    //     mappingPage : true,
    //     isPrevBtnVisible: true,
    //     isNextBtnVisible: true,
    //   })
    // }
    // if (num === 4) {
    //   this.setState({ 
    //     productsByPage : productsByCategory.slice(36),
    //     mappingPage : true,
    //     isPrevBtnVisible: true,
    //     isNextBtnVisible: false,
    //   })
    // }
  }

  goToProductDetail = () => {
    console.log(this.props)
    console.log("goToProductDetail 실행");

  }
 
  render() {
    // console.log("this.props", this.props)
    // console.log("this.props.match.params.category", this.props.match.params.category)
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
                      goToProductDetail={this.goToProductDetail}
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

const APIOfProductList = `${APIROOT}/Data/productList.json`;

