import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, NewsUrl } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://static.vecteezy.com/system/resources/previews/000/169/249/original/holding-remote-control-and-watching-tv-news-vector.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            rel="noreferrer"
            href={NewsUrl}
            target="_blank"
            className="btn btn-dark btn-sm"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
