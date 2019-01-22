import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainPageContainer from "./MainPageContainer/MainPageContainer";
import SinglePageContainer from "./SinglePageContainer/SinglePageContainer";

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={MainPageContainer} />
        <Route path="/singleproduct" component={SinglePageContainer} />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
