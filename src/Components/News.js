import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  acticles = [];

  constructor() {
    super();

    this.state = {
      articles: this.acticles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=9c9b7b7a73ea43cfa15ab1f5f9da97c1";

    //  let data = await fetch(url);
    //  let persedData = await data.json();
    //  console.log(persedData.articles);
    //  this.setState({acticles : persedData.articles})
    // //  this.artcles = persedData.acticles;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          acticles: json.articles,
        });
      });
  }

  render() {
    return (
      <div className="container my-4">
        <h2>News Monkey - Top headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
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
    );
  }
}

export default News;
