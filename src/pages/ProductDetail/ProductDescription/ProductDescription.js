import React, { Component } from 'react';
import './ProductDescription.scss';

class ProductDescription extends Component {
    constructor() {
        super();
        this.state = {
            productName: "Issue Thirty-Two",
            price: "18",
            descriptions: [
                {
                    kategory : "DESCRIPTION",
                    text :"Meet Socrate, the beloved cat of Luc Braquet—the French photographer responsible for some of Kinfolk’s most glamourous fashion editorials including The Big Swing and Summer at Sea. Originally commissioned for Kinfolk’s Summer 2019 issue, the series Le Chat Chic saw Braquet and stylist Tania Rat-Patron try something a little different: They transformed Socrate into a Parisian glamour puss—and one of the magazine’s most popular models of all time. For The Kinfolk Print Collection, Socrate waves a classic Hermès silk scarf with carefree abandon. Fur coat: Model’s own."
                },
                {
                    kategory : "DETAILS",
                    text :"Meet Socrate, the beloved cat of Luc Braquet—the French photographer responsible for some of Kinfolk’s most glamourous fashion editorials including The Big Swing and Summer at Sea. Originally commissioned for Kinfolk’s Summer 2019 issue, the series Le Chat Chic saw Braquet and stylist Tania Rat-Patron try something a little different: They transformed Socrate into a Parisian glamour puss—and one of the magazine’s most popular models of all time. For The Kinfolk Print Collection, Socrate waves a classic Hermès silk scarf with carefree abandon. Fur coat: Model’s own."
                },
                {
                    kategory : "SHIPPING + HANDING",
                    text :"Meet Socrate, the beloved cat of Luc Braquet—the French photographer responsible for some of Kinfolk’s most glamourous fashion editorials including The Big Swing and Summer at Sea. Originally commissioned for Kinfolk’s Summer 2019 issue, the series Le Chat Chic saw Braquet and stylist Tania Rat-Patron try something a little different: They transformed Socrate into a Parisian glamour puss—and one of the magazine’s most popular models of all time. For The Kinfolk Print Collection, Socrate waves a classic Hermès silk scarf with carefree abandon. Fur coat: Model’s own."
                }
            ],
            DescriptionBtnState: "null",
        }
    }

    openDescription = (e) => {
        const { isDescriptionOpen } = this.state;
        this.setState({ isDescriptionOpen: !isDescriptionOpen });
    };

    hadleClick = async (e) => {
        const { DescriptionBtnState } = this.state;
        console.log(e.target.name);
        this.setState(DescriptionBtnState===e.target.name?{ DescriptionBtnState: "null" }:{ DescriptionBtnState: e.target.name });
    }

render() {
    const { productName, price, descriptions, DescriptionBtnState } = this.state;
        return (
                <div className="ProductDescription">
                    <h1>{productName}</h1>
                    <h2>${price}</h2>
                {
                    descriptions.map((el, idx) =>
                        <>
                        <button onClick={this.hadleClick} name={idx} ><span>{el.kategory}</span><span>+</span></button>
                        <div name={idx} className={DescriptionBtnState === `${idx}` ? "openDecription" : "closeDecription"}>{el.text} </div>
                        </>
                    )
                }

                </div>

        );
    }
}

export default ProductDescription;
