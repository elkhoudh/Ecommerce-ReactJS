import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from './carousel/Carousel';
import NewsLetter from "./NewsLetter/NewsLetter";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import About from "./About/About";
class Main extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <FeaturedCategories />
        <FeaturedSection />
        <NewsLetter />
        <About />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
