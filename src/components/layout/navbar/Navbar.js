import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logoSvg from "../../../assets/logo-basel.svg";
import Cart from "./Cart";

const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  min-height: 100px;
  justify-content: space-evenly;

  .nav__parent {
    a {
      margin-right: 25px;
      text-decoration: none;
      font-size: 13px;
      color: black;
    }
  }

  .navbar_logo {
    img {
      width: 200px;
    }
  }

  .nav-right {
    .fa {
      font-size: 55px;
      color: red;
      border: 1px solid red;
    }

    .wishlist {
      &:after {
        content: "testing";
        font-family: Simple-Line-Icons;
      }
    }
  }
`;

class Navbar extends Component {
  render() {
    return (
      <NavStyle>
        <div className="nav__parent">
          <NavLink to="/home" activeStyle={{ color: "#00AAA3" }}>
            HOME
          </NavLink>
          <NavLink to="/shop" activeStyle={{ color: "#00AAA3" }}>
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
        <div className="navbar_logo">
          <img src={logoSvg} alt="logo" />
        </div>
        {/* Right Side */}
        <Cart />
      </NavStyle>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
