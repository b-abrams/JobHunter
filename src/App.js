import React, { Component } from "react";
import logo from "./logo.svg";

import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <HomePage />
      </div>
    );
  }
}

export default App;
