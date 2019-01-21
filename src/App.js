import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    );
  }
}

export default App;
