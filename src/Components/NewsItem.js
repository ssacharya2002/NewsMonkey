import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, NewsUrl, author, date, source } =
      this.props;
    return (
      <div className=" my-3" style={{ width: "18rem" }}>
        <div className=" card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: 1 }}
          >
            {source}
          </span>
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

            <p className="card-footer text-muted">
              By {author ? author : "Unknown"} on{" "}
              {new Date(date).toDateString()}
            </p>
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
      </div>
    );
  }
}

export default NewsItem;
