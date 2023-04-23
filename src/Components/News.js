import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// document.title = `${this.capitalizeFirstLetter(  this.props.category )} - Newsmonkey`;

const News = (props) => {
  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };




  const updateNews = async () => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.Api_key}&page=${page}&pageSize=${props.pagesize}`

    setloading(true);

    props.setProgress(15);

    let data = await fetch(url);
    let parsedData = await data.json();


    props.setProgress(70);
    setarticle(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  // async componentDidMount() {
  //   this.updateNews();
  // }

  // HandlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // HandlenextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  const fetchMoreData = async () => {
    // setState({ loading: true });
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
        props.category
      }&apiKey=${props.Api_key}&page=${page + 1}&pageSize=${props.pagesize}`
    );
    let parsedData = await data.json();

    setpage(page + 1);
    setarticle(article.concat(parsedData.articles));

    // if (article.length >= totalResults) {
    //   setloading(false);
    // }
  };

  return (
    <>
      <h1 style={{marginTop: '80px'}} className="text-center">
        {capitalizeFirstLetter(props.category)} Top-Headlines
      </h1>{" "}
      
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={totalResults > article.length}
        loader={<Spinner />}
      >
        <div className="container mx-4 my-4 ">
          <div className="row">
            {article.map((element) => {
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
      </InfiniteScroll>
      {/* <div className="container  d-flex justify-content-between  my-4">
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
        </div> */}
      {/* <Outlet/> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
  pagesize: 6,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number,
};

export default News;
