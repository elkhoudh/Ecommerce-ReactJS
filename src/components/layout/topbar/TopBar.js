import React from "react";

import "./TopBar.scss";

const Topbar = props => {
  return (
    <div class="topbar-wrapp color-scheme-light">
      <div class="container">
        <div class="topbar-content">
          <div class="top-bar-left"> 
            <i class="fa fa-phone-square" style={{color: "white"}}> </i> OUR PHONE NUMBER: <span style={{marginLeft: "10px", borderBottom: "1px solid rgba(255,255,255,0.3)"}}>+77 (756) 334 876</span>
          </div>
          <div class="top-bar-right">
            <div class="topbar-menu">
              <div class="menu-top-bar-container">
                <ul id="menu-top-bar" class="menu">
                  <li id="menu-item-22357" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22357 menu-item-design-default item-event-hover">
                    <a href="https://demo.xtemos.com/basel/my-account/"><i class="fa fa-user"></i>My Account</a>
                  </li>
                  <li id="menu-item-20484" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20484 menu-item-design-default item-event-hover">
                    <a href="https://demo.xtemos.com/basel/cart/">Cart</a>
                  </li>
                  <li id="menu-item-22845" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22845 menu-item-design-default item-event-hover">
                    <a href="https://demo.xtemos.com/basel/our-shop/">our location</a>
                  </li>
                  <li id="menu-item-20488" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20488 menu-item-design-default item-event-hover">
                    <a href="https://demo.xtemos.com/basel/contact-us-2/">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Topbar;
