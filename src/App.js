import React, { Component } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import { getRequest } from "./requests/axiosLocalHost";

class App extends Component {
  constructor() {
    super();
    this.state = { jobs: [] };
  }

  render() {
    let pageRender = list => {
      if (list === undefined || list.length === 0) {
        return <HomePage />;
      } else {
        return <div>Loading</div>;
      }
    };

    return (
      <div className="App">
        <Navigation />
        {pageRender(this.state.jobs)}
      </div>
    );
  }
}

export default App;
