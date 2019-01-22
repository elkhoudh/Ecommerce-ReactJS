import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import logoSvg from "../../../assets/logo-basel.svg";
import Cart from "./Cart";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-style">
        <div className="nav-style__parent">
          <NavLink to="/" activeStyle={{ color: "#00AAA3" }}>
            HOME
          </NavLink>
          <NavLink
            to="/shop"
            className="shop"
            activeStyle={{ color: "#00AAA3" }}
          >
            SHOP
          </NavLink>
          <NavLink to="/blog" activeStyle={{ color: "#00AAA3" }}>
            BLOG
          </NavLink>
          <NavLink to="/pages" activeStyle={{ color: "#00AAA3" }}>
            PAGES
          </NavLink>
          <NavLink to="/features" activeStyle={{ color: "#00AAA3" }}>
            FEATURES
          </NavLink>
        </div>
        <div className="nav-style__logo">
          <NavLink to="/home" activeStyle={{ color: "#00AAA3" }}>
            <img src={logoSvg} alt="logo" />
          </NavLink>
        </div>
        {/* Right Side */}
        <Cart />
      </div>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
