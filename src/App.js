import React, { Component } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import Listings from "./views/Listings";

const axios = require("axios");
class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: null,
      resume: null,
      loadingJobListings: false,
      loadingResumeText: false,
      showAlert: false
    };

    this.passFormData = this.passFormData.bind(this);
    this.homeReset = this.homeReset.bind(this);
    this.changeShowAlert = this.changeShowAlert.bind(this);
  }

  homeReset() {
    this.setState({
      jobs: null,
      loadingJobListings: false,
      loadingResumeText: false,
      showAlert: false
    });
  }

  passFormData(title, location, type, resume) {
    this.setState({ loadingJobListings: true, loadingResumeText: true }, () => {
      let query = title + " " + type + " position " + location + " indeed";
      axios
        .get("http://localhost:5000/search", {
          params: {
            search: query
          }
        })
        .then(response => {
          this.setState({ jobs: response.data, loadingJobListings: false });
        })
        .catch(error => {
          console.log(error);
        });

      axios
        .get("http://localhost:5000/resume", {
          params: {
            file: resume
          }
        })
        .then(response => {
          this.setState({
            resume: response.data,
            loadingResumeText: false
          });
        })
        .catch(error => {
          console.log(error);
        });
    });
  }

  changeShowAlert() {
    this.setState({ showAlert: !this.state.showAlert });
  }

  render() {
    //let jobListings = require("./test.json");

    let pageRender = () => {
      if (
        this.state.jobs === null &&
        this.state.loadingJobListings === false &&
        this.state.loadingJobListings === false
      ) {
        return (
          <HomePage
            passFormData={this.passFormData}
            changeShowAlert={this.changeShowAlert}
          />
        );
      } else {
        return (
          <Listings
            jobs={this.state.jobs}
            loadingJobListings={this.state.loadingJobListings}
            loadingResumeText={this.state.loadingResumeText}
            resume={this.state.resume}
          />
        );
      }
    };

    let userAlert = () => {
      return (
        <Alert show={this.state.showAlert} variant="warning">
          <Alert.Heading>
            Register/Login Features Currently Under Maintenance
          </Alert.Heading>
          <p>Sorry for the inconvience.</p>
          <hr />
          <Button variant="dark" onClick={this.changeShowAlert}>
            Dismiss
          </Button>
        </Alert>
      );
    };

    return (
      <Container className="App" fluid style={{ padding: 0 }}>
        <Navigation
          homeReset={this.homeReset}
          changeShowAlert={this.changeShowAlert}
        />
        {userAlert()}
        {pageRender()}
      </Container>
    );
  }
}

export default App;
