import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  c = 9;
  Api_key = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <LoadingBar
          color="#1a73e8"
          progress={this.state.progress}
          height={3}
          // onLoaderFinished={() => this.setProgress(0)}
        />

        {/* <News  setProgress={this.setProgress} Api_key={this.Api_key} /> */}

        {/* <Router> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<News  setProgress={this.setProgress} Api_key={this.Api_key} />} />
          <Route
            path="/business"
            element={
              <News  setProgress={this.setProgress} Api_key={this.Api_key} key={"business"} country={"in"} category={"business"} />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News  setProgress={this.setProgress} Api_key={this.Api_key}
                key={"entertainment"}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/general"
            element={
              <News  setProgress={this.setProgress} Api_key={this.Api_key} key={"general"} country={"in"} category={"general"} />
            }
          />
          <Route
            path="/health"
            element={<News  setProgress={this.setProgress} Api_key={this.Api_key} key={"health"} country={"in"} category={"health"} />}
          />
          <Route
            path="/science"
            element={
              <News  setProgress={this.setProgress} Api_key={this.Api_key} key={"science"} country={"in"} category={"science"} />
            }
          />
          <Route
            path="/sports"
            element={<News  setProgress={this.setProgress} Api_key={this.Api_key} key={"sports"} country={"in"} category={"sports"} />}
          />
          <Route
            path="/technology"
            element={
              <News  setProgress={this.setProgress} Api_key={this.Api_key} key={"technology"} country={"in"} category={"technology"} />
            }
          />
        </Routes>
        {/* </Router> */}
      </div>
    );
  }
}
