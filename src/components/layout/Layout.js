import React, { Component } from "react";
import TopBar from "./topbar/TopBar";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import Footer from "./footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Layout;
