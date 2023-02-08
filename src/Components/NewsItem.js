import React, { Component } from 'react'

export class NewsItem extends Component {

  constructor(){
    super();
    console.log("hello im a constructor");

  }



  render() {
    let {title , description , imgUrl, NewsUrl} = this.props;
    return (
      <div className="card my-3" style={{width: "18rem"}}>
      <img src={imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={NewsUrl} className="btn btn-primary btn-sm">Read more</a>
      </div>
    </div>
    )
  }
}

export default NewsItem
