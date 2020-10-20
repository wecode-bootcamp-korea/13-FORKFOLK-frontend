import React, { Component } from "react";
import Product from "./Components/Product"
import "./ProductList.scss"





class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      filterList: [],
      productsList: [],
      offset: 0
    }
  }

  componentDidMount() {
    const LIMIT = 12;
    const APIOfProductFilterList = `http://localhost:3000/Data/productFilterList.json`;
const APIOfProductList = `http://localhost:3000/Data/productList.json?limit=${LIMIT}&offset=${this.state.offset}`;

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
            productsList: res.products,
          })
        })
    ])
  }

  render() {
    const {filterList, productsList} = this.state;

    return (
      <div className="ProductList">
        <main>
          <div className="pageHeader">
            <ul>
            <span>SHOP:</span>
              {filterList.map(list => {
                return (
                  <li key={list.id} value={list.category}>
                    <button>{list.name}</button>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="products">
            <ul>
              {productsList.map((product, i) => {
                return (
                  <Product 
                  key={i}
                  product={product}
                  />
                )
              })}
            </ul>
          </div>
        </main>
      </div>  
    )
  }
};

export default ProductList;
