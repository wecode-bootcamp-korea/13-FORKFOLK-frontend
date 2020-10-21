import React, { Component } from 'react';
import './ProductDescription.scss';

class ProductDescription extends Component {
    constructor() {
        super();
        this.state = {
            productName: "Issue Thirty-Two",
            price: "18",
            descriptions: [`Kinfolk was founded in Portland, operates out of Copenhagen, and has long had roots in Japan. In fact, since 2013, the magazine-and its ongoing exploration of quality of life – has been translated into Japanese at our sister office in the heart of Shibuya, Tokyo. On our most recent visit in March, local editors Mako Ayabe and Kota Engaku reminded us what life in the Japanese capital is like for those living there with a sense of intention and energy: one of the navigable neighbourhoods, courteous codes and cutting-edge culture. This is in stark contrast to the vision of Tokyo as a city that can feel impenetrable to the outsider.
            All orders are shipped worldwide on our behalf by ALIUM, using DHL Express from Denmark. Shipping confirmation and tracking details will be sent by email. Please note that all prints will be shipped separately if ordering multiple items.`,
            `50 x 70 cm
            High quality Giclée* print on 265g fine art paper
            Open edition
            *Giclée is a fine art printing process combining long-lasting archival inks with high quality art paper achieving prints of high-quality and deep vibrant color.`,
            `All orders are shipped worldwide on our behalf by ALIUM, using DHL Express from Denmark. Shipping confirmation and tracking details will be sent by email. Please note that all prints will be shipped separately if ordering multiple items.`
            ],
            isDescriptionOpen: "",
            buttonTest: "",
        }
    }

    openDescription = (e) => {
        const { isDescriptionOpen } = this.state;
        this.setState({ isDescriptionOpen: !isDescriptionOpen });
    };

    hadleClick = async (e) => {
        const { buttonTest } = this.state;
        this.setState(buttonTest===e.target.name?{ buttonTest: "3" }:{ buttonTest: e.target.name });
    }

render() {
    const { productName, price, descriptions, isDescriptionOpen ,buttonTest} = this.state;
        return (
                <div className="ProductDescription">
                    <h1>{productName}</h1>
                    <h2>${price}</h2>
                <div className={isDescriptionOpen ? "openDecription" : "closeDecription"}>{descriptions}</div>
                <button className="button" name="" onClick={this.openDescription} >+more</button>
                
                <button onClick={this.hadleClick} name="0" className={buttonTest==="0" ? "click" : "noClick"} >0</button>
                <button onClick={this.hadleClick} name="1" className={buttonTest==="1" ? "click" : "noClick"} >1</button>
                <button onClick={this.hadleClick} name="2" className={buttonTest==="2" ? "click" : "noClick"} >2</button>

                </div>

        );
    }
}

export default ProductDescription;
