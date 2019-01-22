import React from "react";
import { Link } from "react-router-dom";

const SingleProductNav = () => {
  return (
    <div className="container">
      <Link to="/" className="basel-back-btn basel-tooltip">
        <span className="basel-tooltip-label">Back</span>
        <span>Back</span>
      </Link>
      <nav className="woocommerce-breadcrumb">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/bags">Bags</Link>
        <span className="breadcrumb-last"> Backpack double strap</span>
      </nav>
      <div className="basel-products-nav">
        <div className="product-btn product-prev">
          <a href="https://demo.xtemos.com/basel/shop/bags/lintage-cinch-backpack/">
            Previous product
            <span />
          </a>
          <div className="wrapper-short">
            <div className="product-short">
              <a
                href="https://demo.xtemos.com/basel/shop/bags/lintage-cinch-backpack/"
                className="product-thumb"
              >
                <img
                  width="273"
                  height="348"
                  src="https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-26.jpg"
                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                  alt=""
                  srcset="https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-26.jpg 870w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-26-235x300.jpg 235w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-26-768x980.jpg 768w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-26-803x1024.jpg 803w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-26-266x340.jpg 266w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-26-219x280.jpg 219w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-26-263x336.jpg 263w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-26-526x671.jpg 526w"
                  sizes="(max-width: 273px) 100vw, 273px"
                />
              </a>
              <a
                href="https://demo.xtemos.com/basel/shop/bags/lintage-cinch-backpack/"
                className="product-title"
              >
                Lintage cinch backpack
              </a>
              <span className="price">
                {" "}
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">£</span>
                  447.00
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="product-btn product-next">
          {" "}
          <a href="https://demo.xtemos.com/basel/shop/shoes/ehearling-lined-boot-men/">
            Next product
            <span />
          </a>
          <div className="wrapper-short">
            <div className="product-short">
              {" "}
              <a
                href="https://demo.xtemos.com/basel/shop/shoes/ehearling-lined-boot-men/"
                className="product-thumb"
              >
                {" "}
                <img
                  width="273"
                  height="348"
                  src="https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes13.jpg"
                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                  alt=""
                  srcset="https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes13.jpg 870w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes13-235x300.jpg 235w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes13-768x980.jpg 768w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes13-803x1024.jpg 803w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes13-266x340.jpg 266w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes13-219x280.jpg 219w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes13-263x336.jpg 263w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes13-526x671.jpg 526w"
                  sizes="(max-width: 273px) 100vw, 273px"
                />{" "}
              </a>{" "}
              <a
                href="https://demo.xtemos.com/basel/shop/shoes/ehearling-lined-boot-men/"
                className="product-title"
              >
                {" "}
                Ehearling-lined boot men{" "}
              </a>{" "}
              <span className="price">
                {" "}
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">£</span>
                  159.00
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductNav;
