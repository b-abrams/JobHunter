import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import HunterMale from "../img/homepage/man.png";
import HunterFemale from "../img/homepage/woman.png";
import Binoculars from "../img/homepage/binoculars.png";

import "../css/views/homepage.css";
class HomePage extends Component {
  constructor() {
    super();
    this.state = { formValue: null };

    this.submit = this.submit.bind(this);
    this.processSubmission = this.processSubmission.bind(this);
  }

  submit(event) {
    console.log(this.state.formValue);
    event.preventDefault();
  }

  processSubmission(event) {
    this.setState({ formValue: event.target.value });
    console.log(1);
  }

  render() {
    return (
      <Grid className="HomePage">
        <Row>
          <Col lg={6} centered>
            <Grid className="homeGrid" id="hunterGrid">
              <Row>
                <Col lg={true}>
                  <img id="hunterMale" src={HunterMale} alt="Male Hunter" />
                </Col>
                <Col lg={true}>
                  <img
                    id="hunterFemale"
                    src={HunterFemale}
                    alt="Female Hunter"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={true}>
                  <h1>Start Your Search for Your Next Job</h1>
                </Col>
              </Row>

              <Button id="register" className="homeButton">
                Register
              </Button>
            </Grid>
          </Col>

          <Col lg={6} centered>
            <Grid className="homeGrid" id="quickSearchGrid">
              <h1>Quick Search</h1>
              <Form id="homeForm" onSubmit={this.submit}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Job Title
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="e.g. Software Engineer"
                    />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Location
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="e.g. Los Angeles" />
                  </Col>
                </Form.Group>
                <br />
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                      Employment Type
                    </Form.Label>
                    <Col sm={3}>
                      <Form.Check type="radio" label="Full Time" />
                    </Col>
                    <Col sm={3}>
                      <Form.Check type="radio" label="Part Time" />
                    </Col>
                    <Col sm={3}>
                      <Form.Check type="radio" label="Internship" />
                    </Col>
                  </Form.Group>
                </fieldset>
                <br />
                <Form.Group as={Row}>
                  <Col sm={12} id="searchButtonCol">
                    <Button
                      id="searchButton"
                      type="submit"
                      value={this.state.formValue}
                      onClick={this.processSubmission}
                      className="homeButton"
                    >
                      <img id="binoculars" src={Binoculars} alt="Binoculars" />
                      Search
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Grid>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomePage;
