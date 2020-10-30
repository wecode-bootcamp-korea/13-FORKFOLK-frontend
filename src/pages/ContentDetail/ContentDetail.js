import React, { Component } from "react";
import { CONTENT_DETAIL_API } from "../../config";
import "./ContentDetail.scss";

class ContentDetail extends Component {
  constructor() {
    super();
    this.state = {
      contentInfo: {
        id: 0,
        title: "",
        content: "",
        description: "",
        issue: "",
        image_list: [],
      },
      relatedContent: [],
    };
  }

  componentDidMount() {
    fetch(`${CONTENT_DETAIL_API}${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ contentInfo: res.story_detail[0], relatedContent: res.related_stories });
      });
  }

  render() {
    const {
      contentInfo: { title, content, description, issue, image_list },
      relatedContent,
    } = this.state;
    return (
      <main className="contentDetail">
        <section className="contentContainer">
          <article>
            <span>{issue}</span>
            <header>{title}</header>
            <p>{content}</p>
          </article>
          <img alt="image1" src={image_list[0]}></img>
        </section>
        <section className="contentContainer">
          <img alt="image1" src={image_list[1]}></img>
          <div>
            <div className="articleContainer">
              <article>
                <p>{description}</p>
              </article>
            </div>
            <img alt="image1" src={image_list[2]}></img>
          </div>
        </section>
        <section className="relatedContentSection">
          <header>Related Contents</header>
          <div className="relatedContents">
            {relatedContent.length &&
              relatedContent.map((el) => (
                <div className="relatedContent">
                  <img alt="el.name" src={el.image_url} />
                  <span className="relatedContentCategory">
                    {el.main_category}, {el.issue}
                  </span>
                  <span className="relatedContentTitle">{el.title}</span>
                  <span>{el.content}</span>
                </div>
              ))}
          </div>
        </section>
      </main>
    );
  }
}

export default ContentDetail;
