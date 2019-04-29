import React, { Component } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import { getRequest } from "./requests/axiosLocalHost";

class App extends Component {
  constructor() {
    super();
    this.state = { jobs: null };

    this.passFormData = this.passFormData.bind(this);
  }

  async passFormData(title, location, type) {
    this.setState({ jobs: "null" });
    await this.setState({ jobs: await getRequest(title, location, type) });
  }
  render() {
    console.log(typeof this.state.jobs);
    let pageRender = jobs => {
      if (jobs === null) {
        return <HomePage passFormData={this.passFormData} />;
      } else if (this.state.jobs === "null") {
        return <div>{"Jobs Loading"}</div>;
      } else {
        return <div>{"Jobs Ready"}</div>;
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
