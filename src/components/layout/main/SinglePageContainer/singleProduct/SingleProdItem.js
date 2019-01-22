import React, { Component } from "react";
import { Link } from "react-router-dom";
class SingleProdItem extends Component {
  render() {
    return (
      <div
        className="site-content shop-content-area col-sm-12 content-with-products description-area-before"
        role="main"
      >
        <div className="single-breadcrumbs-wrapper">
          <div className="container">
            {" "}
            <Link to="/" className="basel-back-btn basel-tooltip">
              <span className="basel-tooltip-label">Back</span>
              <span>Back</span>
            </Link>
            <nav className="woocommerce-breadcrumb">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop </Link>
              <Link to="/bags">Bags</Link>
              <span className="breadcrumb-last"> Houble strap backpack</span>
            </nav>
            <div className="basel-products-nav">
              <div className="product-btn product-prev">
                {" "}
                <a href="https://demo.xtemos.com/basel/shop/shoes/hrim-sports-shoes/">
                  Previous product
                  <span />
                </a>
                <div className="wrapper-short">
                  <div className="product-short">
                    {" "}
                    <a
                      href="https://demo.xtemos.com/basel/shop/shoes/hrim-sports-shoes/"
                      className="product-thumb"
                    >
                      {" "}
                      <img
                        width={273}
                        height={348}
                        src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-9.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt
                        srcSet="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-9.jpg 870w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-9-235x300.jpg 235w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-9-768x980.jpg 768w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-9-803x1024.jpg 803w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-9-266x340.jpg 266w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-9-219x280.jpg 219w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-9-263x336.jpg 263w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-9-526x671.jpg 526w"
                        sizes="(max-width: 273px) 100vw, 273px"
                      />{" "}
                    </a>{" "}
                    <a
                      href="https://demo.xtemos.com/basel/shop/shoes/hrim-sports-shoes/"
                      className="product-title"
                    >
                      {" "}
                      Cen’s dress shoes{" "}
                    </a>{" "}
                    <span className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        299.00
                      </span>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-btn product-next">
                {" "}
                <a href="https://demo.xtemos.com/basel/shop/shoes/jontrast-sports-sneakers/">
                  Next product
                  <span />
                </a>
                <div className="wrapper-short">
                  <div className="product-short">
                    {" "}
                    <a
                      href="https://demo.xtemos.com/basel/shop/shoes/jontrast-sports-sneakers/"
                      className="product-thumb"
                    >
                      {" "}
                      <img
                        width={273}
                        height={348}
                        src="https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-7.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt
                        srcSet="https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-7.jpg 870w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-7-235x300.jpg 235w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-7-768x980.jpg 768w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-7-803x1024.jpg 803w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-7-266x340.jpg 266w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-7-219x280.jpg 219w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-7-263x336.jpg 263w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/shoes-7-526x671.jpg 526w"
                        sizes="(max-width: 273px) 100vw, 273px"
                      />{" "}
                    </a>{" "}
                    <a
                      href="https://demo.xtemos.com/basel/shop/shoes/jontrast-sports-sneakers/"
                      className="product-title"
                    >
                      {" "}
                      Jontrast sports sneakers{" "}
                    </a>{" "}
                    <span className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        333.00
                      </span>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="woocommerce-notices-wrapper" />
        </div>
        <div
          id="product-19658"
          className="single-product-page single-product-content product-design-default product-with-attachments post-19658 product type-product status-publish has-post-thumbnail product_cat-bags product_tag-basic product_tag-new first instock featured shipping-taxable purchasable product-type-simple"
        >
          <div className="container">
            <div className="row">
              <div className="product-image-summary col-sm-12">
                <div className="row">
                  <div className="col-sm-6 product-images">
                    <div
                      className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images images row thumbs-position-left image-action-zoom"
                      style={{
                        opacity: 1,
                        transition: "opacity 0.25s ease-in-out 0s"
                      }}
                    >
                      <div className="col-md-9 col-md-push-3">
                        <figure className="woocommerce-product-gallery__wrapper owl-carousel owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all 0s ease 0s",
                                width: 1312
                              }}
                            >
                              <div
                                className="owl-item active"
                                style={{ width: 328 }}
                              >
                                <figure
                                  data-thumb="https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19.jpg"
                                  className="woocommerce-product-gallery__image"
                                  style={{
                                    position: "relative",
                                    overflow: "hidden"
                                  }}
                                >
                                  <a href="https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19.jpg">
                                    <img
                                      width={870}
                                      height={1110}
                                      src="https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19.jpg"
                                      className="wp-post-image wp-post-image"
                                      alt
                                      title="bag (19)"
                                      data-caption
                                      data-src="https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19.jpg"
                                      data-large_image="https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19.jpg"
                                      data-large_image_width={870}
                                      data-large_image_height={1110}
                                      srcSet="https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19.jpg 870w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19-235x300.jpg 235w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19-768x980.jpg 768w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19-803x1024.jpg 803w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19-266x340.jpg 266w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19-219x280.jpg 219w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19-263x336.jpg 263w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19-526x671.jpg 526w"
                                      sizes="(max-width: 870px) 100vw, 870px"
                                    />
                                  </a>
                                  <img
                                    role="presentation"
                                    alt
                                    src="https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19.jpg"
                                    className="zoomImg"
                                    style={{
                                      position: "absolute",
                                      top: "-312.901px",
                                      left: "-30.4324px",
                                      opacity: 0,
                                      width: 870,
                                      height: 1110,
                                      border: "none",
                                      maxWidth: "none",
                                      maxHeight: "none"
                                    }}
                                  />
                                </figure>
                              </div>
                              <div className="owl-item" style={{ width: 328 }}>
                                <figure
                                  data-thumb="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23.jpg"
                                  className="woocommerce-product-gallery__image"
                                  style={{
                                    position: "relative",
                                    overflow: "hidden"
                                  }}
                                >
                                  <a href="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23.jpg">
                                    <img
                                      width={870}
                                      height={1110}
                                      src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23.jpg"
                                      className="attachment-woocommerce_single size-woocommerce_single"
                                      alt
                                      title="bag (23)"
                                      data-caption
                                      data-src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23.jpg"
                                      data-large_image="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23.jpg"
                                      data-large_image_width={870}
                                      data-large_image_height={1110}
                                      srcSet="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23.jpg 870w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23-235x300.jpg 235w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23-768x980.jpg 768w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23-803x1024.jpg 803w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23-266x340.jpg 266w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23-219x280.jpg 219w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23-263x336.jpg 263w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23-526x671.jpg 526w"
                                      sizes="(max-width: 870px) 100vw, 870px"
                                    />
                                  </a>
                                  <img
                                    role="presentation"
                                    alt
                                    src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23.jpg"
                                    className="zoomImg"
                                    style={{
                                      position: "absolute",
                                      top: "-196.199px",
                                      left: "-0.00194009px",
                                      opacity: 0,
                                      width: 870,
                                      height: 1110,
                                      border: "none",
                                      maxWidth: "none",
                                      maxHeight: "none"
                                    }}
                                  />
                                </figure>
                              </div>
                              <div className="owl-item" style={{ width: 328 }}>
                                <figure
                                  data-thumb="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6.jpg"
                                  className="woocommerce-product-gallery__image"
                                  style={{
                                    position: "relative",
                                    overflow: "hidden"
                                  }}
                                >
                                  <a href="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6.jpg">
                                    <img
                                      width={870}
                                      height={1110}
                                      src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6.jpg"
                                      className="attachment-woocommerce_single size-woocommerce_single"
                                      alt
                                      title="bag (6)"
                                      data-caption
                                      data-src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6.jpg"
                                      data-large_image="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6.jpg"
                                      data-large_image_width={870}
                                      data-large_image_height={1110}
                                      srcSet="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6.jpg 870w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6-235x300.jpg 235w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6-768x980.jpg 768w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6-803x1024.jpg 803w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6-266x340.jpg 266w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6-219x280.jpg 219w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6-263x336.jpg 263w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6-526x671.jpg 526w"
                                      sizes="(max-width: 870px) 100vw, 870px"
                                    />
                                  </a>
                                  <img
                                    role="presentation"
                                    alt
                                    src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6.jpg"
                                    className="zoomImg"
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      opacity: 0,
                                      width: 870,
                                      height: 1110,
                                      border: "none",
                                      maxWidth: "none",
                                      maxHeight: "none"
                                    }}
                                  />
                                </figure>
                              </div>
                              <div className="owl-item" style={{ width: 328 }}>
                                <figure
                                  data-thumb="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1.jpg"
                                  className="woocommerce-product-gallery__image"
                                  style={{
                                    position: "relative",
                                    overflow: "hidden"
                                  }}
                                >
                                  <a href="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1.jpg">
                                    <img
                                      width={870}
                                      height={1110}
                                      src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1.jpg"
                                      className="attachment-woocommerce_single size-woocommerce_single"
                                      alt
                                      title="bag (1)"
                                      data-caption
                                      data-src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1.jpg"
                                      data-large_image="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1.jpg"
                                      data-large_image_width={870}
                                      data-large_image_height={1110}
                                      srcSet="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1.jpg 870w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1-235x300.jpg 235w, https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1-768x980.jpg 768w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1-803x1024.jpg 803w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1-266x340.jpg 266w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1-219x280.jpg 219w, https://xtemos1.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1-263x336.jpg 263w, https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1-526x671.jpg 526w"
                                      sizes="(max-width: 870px) 100vw, 870px"
                                    />
                                  </a>
                                  <img
                                    role="presentation"
                                    alt
                                    src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1.jpg"
                                    className="zoomImg"
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      opacity: 0,
                                      width: 870,
                                      height: 1110,
                                      border: "none",
                                      maxWidth: "none",
                                      maxHeight: "none"
                                    }}
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                          <div className="owl-nav disabled">
                            <div className="owl-prev" />
                            <div className="owl-next" />
                          </div>
                          <div className="owl-dots disabled" />
                        </figure>
                        <div className="basel-show-product-gallery-wrap">
                          <a
                            href="#"
                            className="basel-show-product-gallery basel-tooltip"
                          >
                            <span className="basel-tooltip-label">
                              Click to enlarge
                            </span>
                            Click to enlarge
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 col-md-pull-9">
                        <div className="thumbnails thumbnails-ready owl-carousel owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all 0s ease 0s",
                                width: 90
                              }}
                            >
                              <div
                                className="owl-item active-thumb active"
                                style={{ width: "22.5px" }}
                              >
                                <img
                                  alt
                                  title="bag (19)"
                                  src="https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19.jpg"
                                />
                              </div>
                              <div
                                className="owl-item active"
                                style={{ width: "22.5px" }}
                              >
                                <img
                                  alt
                                  title="bag (23)"
                                  src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-23.jpg"
                                />
                              </div>
                              <div
                                className="owl-item active"
                                style={{ width: "22.5px" }}
                              >
                                <img
                                  alt
                                  title="bag (6)"
                                  src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-6.jpg"
                                />
                              </div>
                              <div
                                className="owl-item active"
                                style={{ width: "22.5px" }}
                              >
                                <img
                                  alt
                                  title="bag (1)"
                                  src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-1.jpg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="owl-nav disabled">
                            <div className="owl-prev disabled" />
                            <div className="owl-next disabled" />
                          </div>
                          <div className="owl-dots disabled" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 summary entry-summary">
                    <div className="summary-inner ">
                      <div className="basel-scroll-content">
                        <h1
                          itemProp="name"
                          className="product_title entry-title"
                        >
                          Houble strap backpack
                        </h1>
                        <p className="price">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              £
                            </span>
                            563.00
                          </span>
                        </p>
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            Magnis arcu cum imperdiet suspendisse vestibulum
                            fames parturient a at ut adipiscing mus imperdiet
                            parturient vestibulum iaculis vestibulum tincidunt
                            scelerisque blandit accumsan class eget curae
                            ullamcorper a scelerisque.Amet ipsum ad praesent
                            imperdiet tortor.
                          </p>
                        </div>
                        <form
                          className="cart"
                          action="https://demo.xtemos.com/basel/shop/bags/youble-strap-backpack/"
                          method="post"
                          encType="multipart/form-data"
                        >
                          <div className="quantity">
                            {" "}
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus"
                            />{" "}
                            <label
                              className="screen-reader-text"
                              htmlFor="quantity_5c099dc3c9fa0"
                            >
                              Quantity
                            </label>{" "}
                            <input
                              type="number"
                              id="quantity_5c099dc3c9fa0"
                              className="input-text qty text"
                              step={1}
                              min={1}
                              max
                              name="quantity"
                              defaultValue={1}
                              title="Qty"
                              size={4}
                              pattern="[0-9]*"
                              inputMode="numeric"
                              aria-labelledby="Houble strap backpack quantity"
                            />{" "}
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus"
                            />
                          </div>
                          <button
                            type="submit"
                            name="add-to-cart"
                            value={19658}
                            className="single_add_to_cart_button button alt"
                          >
                            Add to cart
                          </button>
                        </form>
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-19658">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            {" "}
                            <a
                              href="/basel/shop/bags/youble-strap-backpack/?add_to_wishlist=19658"
                              rel="nofollow"
                              data-product-id={19658}
                              data-product-type="simple"
                              className="add_to_wishlist"
                            >
                              {" "}
                              Add to Wishlist
                            </a>{" "}
                            <img
                              src="https://xtemos2.r.worldssl.net/basel/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            {" "}
                            <span className="feedback">
                              Product added!
                            </span>{" "}
                            <a
                              href="https://demo.xtemos.com/basel/wishlist/"
                              rel="nofollow"
                            >
                              {" "}
                              Browse Wishlist{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            {" "}
                            <span className="feedback">
                              The product is already in the wishlist!
                            </span>{" "}
                            <a
                              href="https://demo.xtemos.com/basel/wishlist/"
                              rel="nofollow"
                            >
                              {" "}
                              Browse Wishlist{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                        <div className="clear" />
                        <div className="compare-btn-wrapper">
                          <a
                            className="basel-compare-btn button"
                            href="https://demo.xtemos.com/basel/compare/"
                            data-added-text="Compare products"
                            data-id={19658}
                          >
                            Compare
                          </a>
                        </div>
                        <div className="product_meta">
                          {" "}
                          <span className="posted_in">
                            Category:{" "}
                            <a
                              href="https://demo.xtemos.com/basel/product-category/bags/"
                              rel="tag"
                            >
                              Bags
                            </a>
                          </span>{" "}
                          <span className="tagged_as">
                            Tags:{" "}
                            <a
                              href="https://demo.xtemos.com/basel/product-tag/basic/"
                              rel="tag"
                            >
                              basic
                            </a>
                            <span className="meta-sep">,</span>{" "}
                            <a
                              href="https://demo.xtemos.com/basel/product-tag/new/"
                              rel="tag"
                            >
                              new
                            </a>
                          </span>
                        </div>
                        <div className="product-share">
                          {" "}
                          <span className="share-title">Share</span>
                          <ul className="social-icons text-left icons-design-default icons-size-small social-share ">
                            <li className="social-facebook">
                              <a
                                href="https://www.facebook.com/sharer/sharer.php?u=https://demo.xtemos.com/basel/shop/bags/youble-strap-backpack/"
                                target="_blank"
                                className
                              >
                                <i className="fa fa-facebook" />
                                <span className="basel-social-icon-name">
                                  Facebook
                                </span>
                              </a>
                            </li>
                            <li className="social-twitter">
                              <a
                                href="http://twitter.com/share?url=https://demo.xtemos.com/basel/shop/bags/youble-strap-backpack/"
                                target="_blank"
                                className
                              >
                                <i className="fa fa-twitter" />
                                <span className="basel-social-icon-name">
                                  Twitter
                                </span>
                              </a>
                            </li>
                            <li className="social-google">
                              <a
                                href="http://plus.google.com/share?url=https://demo.xtemos.com/basel/shop/bags/youble-strap-backpack/"
                                target="_blank"
                                className
                              >
                                <i className="fa fa-google-plus" />
                                <span className="basel-social-icon-name">
                                  Google
                                </span>
                              </a>
                            </li>
                            <li className="social-email">
                              <a
                                href="mailto:?subject=Check this https://demo.xtemos.com/basel/shop/bags/youble-strap-backpack/"
                                target="_blank"
                                className
                              >
                                <i className="fa fa-envelope" />
                                <span className="basel-social-icon-name">
                                  Email
                                </span>
                              </a>
                            </li>
                            <li className="social-pinterest">
                              <a
                                href="http://pinterest.com/pin/create/button/?url=https://demo.xtemos.com/basel/shop/bags/youble-strap-backpack/&media=https://xtemos3.r.worldssl.net/basel/wp-content/uploads/2015/10/bag-19.jpg"
                                target="_blank"
                                className
                              >
                                <i className="fa fa-pinterest" />
                                <span className="basel-social-icon-name">
                                  Pinterest
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" />
          <div className="product-tabs-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="woocommerce-tabs wc-tabs-wrapper tabs-layout-tabs">
                    <ul className="tabs wc-tabs">
                      <li className="description_tab active">
                        {" "}
                        <a href="#tab-description">Description</a>
                      </li>
                      <li className="additional_information_tab">
                        {" "}
                        <a href="#tab-additional_information">
                          Additional information
                        </a>
                      </li>
                      <li className="reviews_tab">
                        {" "}
                        <a href="#tab-reviews">Reviews (0)</a>
                      </li>
                      <li className="basel_additional_tab_tab">
                        {" "}
                        <a href="#tab-basel_additional_tab">
                          Shipping &amp; Delivery
                        </a>
                      </li>
                    </ul>
                    <div className="basel-tab-wrapper">
                      {" "}
                      <a
                        href="#tab-description"
                        className="basel-accordion-title tab-title-description"
                      >
                        Description
                      </a>
                      <div
                        className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                        id="tab-description"
                        style={{ display: "block" }}
                      >
                        <div className="vc_row wpb_row vc_row-fluid">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="title-wrapper  basel-title-color-default basel-title-style-simple basel-title-size-default text-center ">
                                  <div className="liner-continer">
                                    {" "}
                                    <span className="left-line" />
                                    <h4 className="title">
                                      <strong>PRODUCT DESCRIPTION</strong>
                                      <span className="title-separator">
                                        <span />
                                      </span>
                                    </h4>{" "}
                                    <span className="right-line" />
                                  </div>
                                </div>
                                <div className="wpb_text_column wpb_content_element">
                                  <div className="wpb_wrapper">
                                    <p style={{ textAlign: "center" }}>
                                      Aenean enim nisl volutpat fusce commodo
                                      dui hac in a vestibulum diam convallis dis
                                      parturient condimentum massa ac sagittis
                                      sed dapibus ullamcorper blandit parturient
                                      arcu urna cursus suscipit diam rhoncus.
                                      Mus pretium etiam a magna malesuada
                                      pharetra tempus nam sapien a adipiscing
                                      blandit lorem urna maecenas donec
                                      porttitor faucibus malesuada ac consequat.
                                      Aliquet sit fusce sociosqu suscipit per a
                                      nisl sit conubia pulvinar vitae pretium a
                                      convallis id a magnis a amet varius ac
                                      mauris quam dictumst a. A dolor aliquet
                                      ultricies parturient ac a parturient
                                      suspendisse sociosqu sodales in.
                                    </p>
                                    <p
                                      className="font-title"
                                      style={{
                                        fontStyle: "italic",
                                        fontSize: 18,
                                        color: "#131313",
                                        textAlign: "center"
                                      }}
                                    >
                                      A adipiscing sociis ultrices sociosqu
                                      curabitur neque tristique duis cum vitae
                                      ut habitant ornare aptent a diam cursus
                                      potenti nibh nec scelerisque. Lectus
                                      ridiculus ac quam platea venenatis
                                      eleifend ullamcorper ullamcorper id
                                      euismod mus fusce volutpat montes.
                                    </p>
                                    <p style={{ textAlign: "center" }}>
                                      Vitae vestibulum congue nunc parturient
                                      venenatis dictumst hac varius ullamcorper
                                      nec nascetur ridiculus aptent scelerisque
                                      cum at fringilla dis ut phasellus a cum
                                      litora est quis a ornare orci.Dis vivamus
                                      tincidunt amet porttitor dis hac
                                      consectetur elit ut non a dui facilisis
                                      elementum dignissim est porta condimentum
                                      ullamcorper donec mauris ridiculus a nam
                                      purus dictumst suscipit. Nisl nascetur
                                      suspendisse a aliquet fusce quisque litora
                                      venenatis.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basel-tab-wrapper">
                      {" "}
                      <a
                        href="#tab-additional_information"
                        className="basel-accordion-title tab-title-additional_information"
                      >
                        Additional information
                      </a>
                      <div
                        className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
                        id="tab-additional_information"
                        style={{ display: "none" }}
                      >
                        <table className="shop_attributes">
                          <tbody>
                            <tr>
                              <th>Color</th>
                              <td>
                                <p>Green</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="basel-tab-wrapper">
                      {" "}
                      <a
                        href="#tab-reviews"
                        className="basel-accordion-title tab-title-reviews"
                      >
                        Reviews (0)
                      </a>
                      <div
                        className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                        id="tab-reviews"
                        style={{ display: "none" }}
                      >
                        <div id="reviews" className="woocommerce-Reviews">
                          <div id="comments">
                            <h2 className="woocommerce-Reviews-title">
                              Reviews
                            </h2>
                            <p className="woocommerce-noreviews">
                              There are no reviews yet.
                            </p>
                          </div>
                          <div id="review_form_wrapper">
                            <div id="review_form">
                              <div id="respond" className="comment-respond">
                                {" "}
                                <span
                                  id="reply-title"
                                  className="comment-reply-title"
                                >
                                  Be the first to review “Houble strap backpack”{" "}
                                  <small>
                                    <a
                                      rel="nofollow"
                                      id="cancel-comment-reply-link"
                                      href="/basel/shop/bags/youble-strap-backpack/#respond"
                                      style={{ display: "none" }}
                                    >
                                      Cancel reply
                                    </a>
                                  </small>
                                </span>
                                <form
                                  action="https://demo.xtemos.com/basel/wp-comments-post.php"
                                  method="post"
                                  id="commentform"
                                  className="comment-form"
                                >
                                  <p className="comment-notes">
                                    <span id="email-notes">
                                      Your email address will not be published.
                                    </span>{" "}
                                    Required fields are marked{" "}
                                    <span className="required">*</span>
                                  </p>
                                  <div className="comment-form-rating">
                                    <label htmlFor="rating">Your rating</label>
                                    <p className="stars">
                                      <span>
                                        <a className="star-1" href="#">
                                          1
                                        </a>
                                        <a className="star-2" href="#">
                                          2
                                        </a>
                                        <a className="star-3" href="#">
                                          3
                                        </a>
                                        <a className="star-4" href="#">
                                          4
                                        </a>
                                        <a className="star-5" href="#">
                                          5
                                        </a>
                                      </span>
                                    </p>
                                    <select
                                      name="rating"
                                      id="rating"
                                      required
                                      style={{ display: "none" }}
                                    >
                                      <option value>Rate…</option>
                                      <option value={5}>Perfect</option>
                                      <option value={4}>Good</option>
                                      <option value={3}>Average</option>
                                      <option value={2}>Not that bad</option>
                                      <option value={1}>Very poor</option>{" "}
                                    </select>
                                  </div>
                                  <p className="comment-form-comment">
                                    <label htmlFor="comment">
                                      Your review&nbsp;
                                      <span className="required">*</span>
                                    </label>
                                    <textarea
                                      id="comment"
                                      name="comment"
                                      cols={45}
                                      rows={8}
                                      required
                                      defaultValue={""}
                                    />
                                  </p>
                                  <p className="comment-form-author">
                                    <label htmlFor="author">
                                      Name&nbsp;
                                      <span className="required">*</span>
                                    </label>{" "}
                                    <input
                                      id="author"
                                      name="author"
                                      type="text"
                                      defaultValue
                                      size={30}
                                      required
                                    />
                                  </p>
                                  <p className="comment-form-email">
                                    <label htmlFor="email">
                                      Email&nbsp;
                                      <span className="required">*</span>
                                    </label>{" "}
                                    <input
                                      id="email"
                                      name="email"
                                      type="email"
                                      defaultValue
                                      size={30}
                                      required
                                    />
                                  </p>
                                  <p className="form-submit">
                                    <input
                                      name="submit"
                                      type="submit"
                                      id="submit"
                                      className="submit"
                                      defaultValue="Submit"
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="comment_post_ID"
                                      defaultValue={19658}
                                      id="comment_post_ID"
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="comment_parent"
                                      id="comment_parent"
                                      defaultValue={0}
                                    />
                                  </p>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="clear" />
                        </div>
                      </div>
                    </div>
                    <div className="basel-tab-wrapper">
                      {" "}
                      <a
                        href="#tab-basel_additional_tab"
                        className="basel-accordion-title tab-title-basel_additional_tab"
                      >
                        Shipping &amp; Delivery
                      </a>
                      <div
                        className="woocommerce-Tabs-panel woocommerce-Tabs-panel--basel_additional_tab panel entry-content wc-tab"
                        id="tab-basel_additional_tab"
                        style={{ display: "none" }}
                      >
                        {" "}
                        <img
                          src="https://xtemos2.r.worldssl.net/basel/wp-content/uploads/2015/08/shipping.jpg"
                          className="alignleft"
                        />
                        <p>
                          Vestibulum curae torquent diam diam commodo parturient
                          penatibus nunc dui adipiscing convallis bulum
                          parturient suspendisse parturient a.Parturient in
                          parturient scelerisque nibh lectus quam a natoque
                          adipiscing a vestibulum hendrerit et pharetra
                          fames.Consequat net
                        </p>
                        <p>
                          Vestibulum parturient suspendisse parturient
                          a.Parturient in parturient scelerisque nibh lectus
                          quam a natoque adipiscing a vestibulum hendrerit et
                          pharetra fames.Consequat netus.
                        </p>
                        <p>
                          Scelerisque adipiscing bibendum sem vestibulum et in a
                          a a purus lectus faucibus lobortis tincidunt purus
                          lectus nisl class eros.Condimentum a et ullamcorper
                          dictumst mus et tristique elementum nam inceptos hac
                          vestibulum amet elit
                        </p>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProdItem;
