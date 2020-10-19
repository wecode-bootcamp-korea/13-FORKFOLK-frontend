import React, { Component } from "react";
import Product from "./Components/Product"
import "./ProductList.scss"

const APIOfProductFilterList = "http://localhost:3000/Data/productFilterList.json";
const APIOfProductList = "http://localhost:3000/Data/productList.json";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      filterList: [],
      productsList: []
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(APIOfProductFilterList, {method: "GET"})
        .then(res => res.json())
        .then(res => {
          // console.log(res);
          this.setState({
            filterList: res.filterList,
          });
        }).catch(error => console.log(error.message)),

      fetch(APIOfProductList, {method: "GET"})
        .then(res => res.json())
        .then(res => {
          console.log(res);
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
              {productsList.map(product => {
                return (
                  <Product 
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
