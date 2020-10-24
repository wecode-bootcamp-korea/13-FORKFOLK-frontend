import React, { Component } from 'react';

class ContentDetail extends Component {
    constructor() {
        super();
        this.state = {
            contentInfo: {
                id: 0,
                contentImgs :[],
                contentName: "",
                descriptions: [],
            },
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/Data/ContentDetailData.json', {
        }).then(res => res.json())
          .then(res => {
            this.setState({
                contentInfo : res.content
            });
          });
    }

    render() {
        return (
            <div className='contentDetail'>
                
            </div>
        )
    }
}

export default ContentDetail;


