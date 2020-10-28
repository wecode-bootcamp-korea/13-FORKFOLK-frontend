import React, { Component } from "react";
import "./ProductDescription.scss";

class ProductDescription extends Component {
  constructor() {
    super();
    this.state = {
      DescriptionBtnState: 2,
    };
  }

  openDescription = (e) => {
    const { isDescriptionOpen } = this.state;
    this.setState({ isDescriptionOpen: !isDescriptionOpen });
  };

  hadleClick = async (e) => {
    const { DescriptionBtnState } = this.state;
    const { name } = e.target;
    this.setState(
      DescriptionBtnState === name
        ? { DescriptionBtnState: 2 }
        : { DescriptionBtnState: name }
    );
  };

  render() {
    const { DescriptionBtnState } = this.state;
    const { productName, price, descriptions } = this.props;
    return (
      <div className="productDescription">
        <h1>{productName}</h1>
        <h2>${price}</h2>
        {Object.keys(descriptions).map((description, descriptionidx) => (
          <>
            <button onClick={this.hadleClick} name={descriptionidx}>
              <span>{description}</span>
              <span>
                {DescriptionBtnState === `${descriptionidx}` ? "-" : "+"}
              </span>
            </button>
            <div
              name={descriptionidx}
              className={
                DescriptionBtnState === `${descriptionidx}`
                  ? "openDecription"
                  : "closeDecription"
              }
            >
              {descriptions[description]}{" "}
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default ProductDescription;
