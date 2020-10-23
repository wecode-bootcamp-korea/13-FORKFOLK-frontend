import React, { Component } from 'react';
import './ProductDescription.scss';

class ProductDescription extends Component {
    constructor() {
        super();
        this.state = {
            DescriptionBtnState: "null",
        }
    }

    openDescription = (e) => {
        const { isDescriptionOpen } = this.state;
        this.setState({ isDescriptionOpen: !isDescriptionOpen });
    };

    hadleClick = async (e) => {
        const { DescriptionBtnState } = this.state;
        const { name } = e.target;
        this.setState(DescriptionBtnState===name?{ DescriptionBtnState: "null" }:{ DescriptionBtnState: name });
    }

render() {
    const {  DescriptionBtnState } = this.state;
    const {id,productName,price,descriptions}= this.props;
        return (
                <div className="ProductDescription">
                    <h1>{productName}</h1>
                    <h2>${price}</h2>
                {
                    descriptions.map((description, descriptionidx) =>
                        <>
                        <button onClick={this.hadleClick} name={descriptionidx} ><span>{description.kategory}</span><span>{DescriptionBtnState === `${descriptionidx}` ? "-" : "+"}</span></button>
                        <div name={descriptionidx} className={DescriptionBtnState === `${descriptionidx}` ? "openDecription" : "closeDecription"}>{description.text} </div>
                        </>
                    )
                }

                </div>

        );
    }
}

export default ProductDescription;
