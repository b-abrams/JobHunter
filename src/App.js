import React, { Component } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import Listings from "./views/Listings";

const axios = require("axios");
class App extends Component {
  constructor() {
    super();
    this.state = { jobs: null, loading: false, show: false };

    this.passFormData = this.passFormData.bind(this);
    this.homeReset = this.homeReset.bind(this);
    this.changeShow = this.changeShow.bind(this);
  }

  homeReset() {
    this.setState({ jobs: null, loading: false, show: false });
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
          console.log(typeof response);
          console.log(response);
          this.setState({ jobs: response.data, loading: false });
        })
        .catch(error => {
          console.log(error);
        });
    });
  }

  changeShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    //let jobListings = require("./test.json");

    let pageRender = () => {
      if (this.state.jobs === null && this.state.loading === false) {
        return (
          <HomePage
            passFormData={this.passFormData}
            changeShow={this.changeShow}
          />
        );
      } else {
        return <Listings jobs={this.state.jobs} loading={this.state.loading} />;
      }
    };

    let userAlert = () => {
      return (
        <Alert show={this.state.show} variant="warning">
          <Alert.Heading>
            Register/Login Features Currently Under Maintenance
          </Alert.Heading>
          <p>Sorry for the inconvience.</p>
          <hr />
          <Button variant="dark" onClick={this.changeShow}>
            Dismiss
          </Button>
        </Alert>
      );
    };

    return (
      <Container className="App" fluid style={{ padding: 0 }}>
        <Navigation homeReset={this.homeReset} changeShow={this.changeShow} />
        {userAlert()}
        {pageRender()}
      </Container>
    );
  }
}

export default App;
