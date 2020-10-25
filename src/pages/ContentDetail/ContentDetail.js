import React, { Component } from 'react';
import "./ContentDetail.scss";

class ContentDetail extends Component {
    constructor() {
        super();
        this.state = {
            contentInfo: {
                id: 0,
                contentImgs :[],
                contentName: "",
                issueNum : "",
                descriptions: [],
            },
        }
    }

    componentDidMount() {
        console.log("v");
        fetch('http://localhost:3000/Data/ContentDetailData.json', {
        }).then(res => res.json())
            .then(res => {
            this.setState({
                contentInfo : res.content
            });
          });
    }

    render() {
        const { contentInfo: { id, contentImgs, contentName,issueNum, descriptions } } = this.state;
        console.log(id, contentImgs, contentName, descriptions);
        return (
            <main className="contentDetail">
                <section className="contentContainer">
                    <article className="sticky">
                        <span>issue {issueNum}</span>
                        <header>{contentName}</header>
                        <p>{descriptions[0]}</p>
                    </article>
                    <img src={contentImgs[0]}></img>
                </section>
                <section className="contentContainer">
                    <img className="sticky" src={contentImgs[1]}></img>
                    <article >
                        <p>{descriptions[1]}</p>
                        </article>
                </section>
            </main>
        )
    }
}

export default ContentDetail;


