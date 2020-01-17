import React, { Component } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
