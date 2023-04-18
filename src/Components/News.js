import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pagesize: 6,
  };

  article = [];

  constructor() {
    super();
    this.state = {
      article: [],
      page: 0,
      totalResults: 0,
      loading: false,
    };
  }

  async updateNews() {
    this.setState({ loading: true });
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c9b7b7a73ea43cfa15ab1f5f9da97c1&page=${this.state.page}&pageSize=${this.props.pagesize}`
    );
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  HandlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  HandlenextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <h1 style={{ marginTop: "35px" }} className="text-center">
          {this.props.category} Top-Headlines
        </h1>{" "}
        {/*style={{marginTop: '80px'}}*/}
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div className="container mx-4 my-4 ">
            <div className="row">
              {this.state.article.map((element) => {
                return (
                  <div key={element.url} className="col-md-4 ">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      NewsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="container  d-flex justify-content-between  my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.HandlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.HandlenextClick}
          >
            Next &rarr;
          </button>
        </div>
        {/* <Outlet/> */}
      </>
    );
  }
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number,
};

export default News;
