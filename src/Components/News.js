import React, { Component } from "react";
// import Nav from "./Nav";
import NewsItem from "./NewsItem";

class News extends Component {
  article = [];

  constructor() {
    super();

    console.log("cunstructor");

    this.state = {
      article: [],
      page: 0,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=9c9b7b7a73ea43cfa15ab1f5f9da97c1&pageSize=20"
    );
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({
      article: parsedData.articles,
      totalResults: Math.ceil(parsedData.totalResults / 20),
    });
  }

  HandlePrevClick = async () => {
    console.log("handle previous");

    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=9c9b7b7a73ea43cfa15ab1f5f9da97c1&page=${
        this.state.page - 1
      }&pageSize=20`
    );
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({ article: parsedData.articles });

    this.setState({ page: this.state.page - 1 });
  };

  HandlenextClick = async () => {
    if (this.state.page + 1 > this.state.totalResults) {
    } else {
      console.log("handle next");
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=9c9b7b7a73ea43cfa15ab1f5f9da97c1&page=${
          this.state.page + 1
        }&pageSize=20`
      );
      let parsedData = await data.json();
      console.log(parsedData.articles);
      this.setState({ article: parsedData.articles });

      this.setState({ page: this.state.page + 1 });
    }
  };

  render() {
    console.log("render");
    console.log(this.state.article);
    return (
      <>
        <div className="container mx-4 my-4">
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div key={element.url} className="col-md-4 ">
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    NewsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="container  d-flex justify-content-between  my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.HandlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > this.state.totalResults}
            type="button"
            class="btn btn-dark"
            onClick={this.HandlenextClick}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
