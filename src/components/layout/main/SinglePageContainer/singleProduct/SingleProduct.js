import React, { Component } from "react";
import SingleProductNav from "./SingleProductNav";
import SingleProdItem from "./SingleProdItem";
import SingleRelatedProduct from "./SingleRelatedProduct";

class SingleProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <SingleProductNav />
        <SingleProdItem />
        <SingleRelatedProduct />
      </React.Fragment>
    );
  }
}

export default SingleProduct;
