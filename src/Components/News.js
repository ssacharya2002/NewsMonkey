import React, { Component } from "react";
import Spinner from "./Spinner"
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';


class News extends Component {
static defaultProps={
  country :"in",
  category:"general",
  pagesize :3
}




  article = [];

  constructor() {
    super();

    console.log("cunstructor");

    this.state = {
      article: [],
      page: 0,
      totalResults: 0,
      loading : false
    };
  }

  async componentDidMount() {

    this.setState({loading:true});
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9c9b7b7a73ea43cfa15ab1f5f9da97c1&pageSize=${this.props.pagesize}`
    );
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({
      article: parsedData.articles,
      totalResults: Math.ceil(parsedData.totalResults / this.props.pagesize),
      loading : false
    });
  }

  HandlePrevClick = async () => {
    console.log("handle previous");
    this.setState({loading:true});

    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9c9b7b7a73ea43cfa15ab1f5f9da97c1&page=${
        this.state.page - 1
      }&pageSize=${this.props.pagesize}`
    );
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({ article: parsedData.articles ,
    loading:false });

    this.setState({ page: this.state.page - 1 });
  };

  HandlenextClick = async () => {
    if (!(this.state.page + 1 > this.state.totalResults)) {
      this.setState({loading:true});
      console.log("handle next");
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9c9b7b7a73ea43cfa15ab1f5f9da97c1&page=${
          this.state.page + 1
        }&pageSize=${this.props.pagesize}`
      );
      let parsedData = await data.json();
      console.log(parsedData.articles);
      this.setState({ article: parsedData.articles });

      this.setState({ page: this.state.page + 1, loading:false });
    }
  };

  render() {
    
    
    return (
      <>
      <h1 className="text-center">Top-Headlines</h1>   {/*style={{marginTop: '80px'}}*/}
      {this.state.loading && <Spinner />}

      {!this.state.loading && 
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
                  />
                </div>
              );
            })}
          </div>
        </div>
      }

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
            disabled={this.state.page + 1 > this.state.totalResults}
            type="button"
            className="btn btn-dark"
            onClick={this.HandlenextClick}
          >
            Next &rarr;
          </button>
        </div>
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
