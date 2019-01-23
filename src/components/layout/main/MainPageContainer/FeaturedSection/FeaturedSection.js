import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import { connect } from "react-redux";
import { getAllProducts } from "../../../../../store/actions/productActions";

const FeaturedSection = props => {
  props.onGetProducts();
  return (
    <div className="title-wrapper  basel-title-color-default basel-title-style-cross basel-title-size-default text-center vc_custom_1453814964817">
      <span className="title-subtitle font-default">MADE THE HARD WAY</span>
      <div className="liner-continer">
        {" "}
        <span className="left-line" />
        <h4 className="title">
          FEATURED PRODUCTS
          <span className="title-separator">
            <span />
          </span>
        </h4>{" "}
        <span className="right-line" />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  products: state.products
});

const mapActionsToProps = {
  onGetProducts: getAllProducts
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(FeaturedSection);
