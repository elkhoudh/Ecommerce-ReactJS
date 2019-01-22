import React, { Component } from "react";

import "./Carousel.scss";

const sampleImages = [
  "images/sample/butterfly.jpg",
  "images/sample/city.jpg",
  "images/sample/desert.jpg",
  "images/sample/flower.jpg",
  "images/sample/flowers.jpg",
  "images/sample/night.jpg",
  "images/sample/sunset.jpg",
  "images/sample/surf.jpg",
  "images/sample/tiger.jpg",
  "images/sample/water.jpg"
];

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselImages: [],
      currentCarouselIndex: 0
    };
  }

  componentDidMount() {
    const carouselImages = sampleImages;
    this.setState({
      carouselImages
    });
  }

  carouselSlideLeft() {
    this.setState(prevState => ({
      currentCarouselIndex:
        prevState.currentCarouselIndex === 0
          ? this.state.carouselImages.length - 1
          : prevState.currentCarouselIndex - 1
    }));
  }

  carouselSlideRight() {
    this.setState(prevState => ({
      currentCarouselIndex:
        prevState.currentCarouselIndex === this.state.carouselImages.length - 1
          ? 0
          : prevState.currentCarouselIndex + 1
    }));
  }

  handleClick = e => {
    e.preventDefault();
    switch (e.currentTarget.dataset.click) {
      case "carousel-left-btn":
        this.carouselSlideLeft();
        break;

      case "carousel-right-btn":
        this.carouselSlideRight();
        break;
    }
  };

  render() {
    return (
      <div className="carousel">
        <div
          className="carousel__btn--left"
          data-click="carousel-left-btn"
          onClick={this.handleClick}
        >
          {"<"}
        </div>
        <img
          className="carousel__image"
          src={this.state.carouselImages[this.state.currentCarouselIndex]}
          alt=""
        />
        <div
          className="carousel__btn--right"
          data-click="carousel-right-btn"
          onClick={this.handleClick}
        >
          {">"}
        </div>
      </div>
    );
  }
}

export default Carousel;
