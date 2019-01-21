import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardWidget = styled.div`
  .cart-widget-side {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 339px;
    width: 340px;
    transition: transform 0.3s ease;
    display: none;
    cursor: pointer;
    z-index: 10000;
  }
  .cart-widget-side .widget-heading {
    margin-bottom: 20px;
    padding: 28px 20px;
    background-color: #000;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-flex-wrap: wrap;
    -webkit-flex-direction: row;
    -webkit-justify-content: space-between;
  }

  .cart-widget-side .widget-heading .widget-title {
    letter-spacing: 0.6px;
    margin-bottom: 0;
    padding-bottom: 0;
    font-size: 24px;
    vertical-align: middle;
    display: inline-block;
    color: #fff;
    /* font-family: Karla; */
    font-weight: 700;
    font-style: normal;
  }
  .cart-widget-side .widget-heading .widget-close {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.6px;
    line-height: 35px;
    position: relative;
    cursor: pointer;
    padding-right: 21px;
    &::before {
      content: " ";
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -1px;
      width: 15px;
      height: 2px;
      display: inline-block;
      background-color: #fff;
      -webkit-transition: background-color 0.2s ease-in-out,
        transform 0.2s ease-in-out, width 0.2s ease-in-out;
      -moz-transition: background-color 0.2s ease-in-out,
        transform 0.2s ease-in-out, width 0.2s ease-in-out;
      -o-transition: background-color 0.2s ease-in-out,
        transform 0.2s ease-in-out, width 0.2s ease-in-out;
      transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out,
        width 0.2s ease-in-out;
    }
    *:before,
    *:after {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
  .basel-close-side {
    top: -150px;
    height: calc(100vh + 300px);
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 400;
    width: 100%;
    transition: all 0.3s ease;
  }
`;

class Cart extends Component {
  state = {
    isOpen: false
  };

  cartWidget = () => {
    this.setState(
      (state, props) => {
        return { isOpen: !state.isOpen };
      },
      () => console.log(this.state.isOpen)
    );
  };
  render() {
    return (
      // <CardWidget>
      <CardWidget>
        <div className="right-column">
          <div className="header-links my-account-with-text">
            <ul>
              <li className="login-side-opener">
                <a href="https://demo.xtemos.com/basel/my-account/">
                  Login / Register
                </a>
              </li>
            </ul>
          </div>
          <div className="search-button basel-search-full-screen">
            <a href="#">
              <i className="fa fa-search" />{" "}
            </a>
            <div className="basel-search-wrapper">
              <div className="basel-search-inner">
                <span className="basel-close-search">close</span>
                <form>
                  <div>
                    <label className="screen-reader-text">Search for:</label>
                    <input
                      type="text"
                      className="search-field"
                      placeholder="Search for products"
                      value=""
                      name="s"
                      id="s"
                    />
                    <input
                      type="hidden"
                      name="post_type"
                      id="post_type"
                      value="product"
                    />
                    <button type="submit" id="searchsubmit" value="Search">
                      Search
                    </button>
                  </div>
                </form>
                <div className="search-results-wrapper">
                  <div className="basel-scroll has-scrollbar">
                    <div
                      className="basel-search-results basel-scroll-content"
                      style={{ right: "-17px" }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          display: "none",
                          maxHeight: "300px",
                          zIndex: 9999
                        }}
                      />
                    </div>
                    <div
                      className="basel-scroll-pane"
                      style={{ display: "none" }}
                    >
                      <div
                        className="basel-scroll-slider"
                        style={{
                          height: "20px",
                          transform: "translate(0px, 0px)"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wishlist-info-widget">
            <a href="https://demo.xtemos.com/basel/wishlist/">
              Wishlist <span className="wishlist-count">0</span>
            </a>
          </div>
          <div
            className="shopping-cart basel-cart-design-1 basel-cart-icon cart-widget-opener"
            onClick={this.cartWidget}
            style={{ cursor: "pointer" }}
          >
            <a>
              <span>
                Cart (<span>o</span>)
              </span>
              <span className="basel-cart-totals">
                <span className="basel-cart-number">0</span>
                <span className="subtotal-divider">/</span>
                <span className="basel-cart-subtotal">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">£</span>
                    0.00
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div className="mobile-nav-icon">
            <span className="basel-burger" />
          </div>
        </div>
        {/* Side bar toggle */}
        <div
          className="cart-widget-side"
          style={this.state.isOpen ? { display: "block" } : { display: "none" }}
        >
          <div className="widget-heading">
            <h3 className="widget-title">Shopping cart</h3>
            <a href="#" className="widget-close" onClick={this.cartWidget}>
              close
            </a>
          </div>
          <div className="widget woocommerce widget_shopping_cart">
            <div className="widget_shopping_cart_content">
              <p className="woocommerce-mini-cart__empty-message empty">
                No products in the cart.
              </p>
            </div>
          </div>
        </div>
        <div
          className="basel-close-side"
          onClick={this.cartWidget}
          style={
            this.state.isOpen
              ? {
                  opacity: 1,
                  visibility: "visible"
                }
              : {
                  opacity: 0
                  // visibility: "visible"
                }
          }
        />
      </CardWidget>
      // </CardWidget>
    );
  }
}

Cart.propTypes = {};

export default Cart;
