import React, { Component } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import Listings from "./views/Listings";

const axios = require("axios");
class App extends Component {
  constructor() {
    super();
    this.state = { jobs: null, loading: false };

    this.passFormData = this.passFormData.bind(this);
    this.homeReset = this.homeReset.bind(this);
  }

  homeReset() {
    this.setState({ jobs: null, loading: false });
  }

  passFormData(title, location, type) {
    this.setState({ loading: true }, () => {
      let query = title + " " + type + " position " + location + " indeed";
      axios
        .get("http://localhost:5000", {
          params: {
            search: query
          }
        })
        .then(response => {
          this.setState({ jobs: response, loading: false });
        })
        .catch(error => {
          console.log(error);
        });
    });
  }

  render() {
    let pageRender = () => {
      if (this.state.jobs === null && this.state.loading === false) {
        return <HomePage passFormData={this.passFormData} />;
      } else if (this.state.loading === true) {
        return <div>{"Jobs Loading"}</div>;
      } else {
        return <div>{"Jobs Ready"}</div>;
      }
    };

    let jobListings = require("./test.json");

    return (
      <div className="App">
        <Navigation homeReset={this.homeReset} />
        {/* {pageRender()} */}
        <Listings jobs={jobListings} />
      </div>
    );
  }
}

export default App;
