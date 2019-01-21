import React, { Component } from "react";
import PropTypes from "prop-types";

class Cart extends Component {
  state = {
    isOpen: false
  };
  cartWidget = () => {
    this.setState((state, props) => {
      return { isOpen: !state.isOpen };
    });
  };
  render() {
    return (
      <div>
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
                      autocomplete="off"
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
                      tabindex="0"
                      style={{ right: "-17px" }}
                    >
                      <div
                        className="autocomplete-suggestions"
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
          >
            <a href="/">
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
          style={{
            background: "gray"
          }}
        >
          <div className="widget-heading">
            <h3 className="widget-title">Shopping cart</h3>{" "}
            <a href="#" className="widget-close">
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
      </div>
    );
  }
}

Cart.propTypes = {};

export default Cart;
