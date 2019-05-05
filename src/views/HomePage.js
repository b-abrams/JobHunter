import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import HunterMale from "../img/homepage/man.png";
import HunterFemale from "../img/homepage/woman.png";
import Binoculars from "../img/homepage/binoculars.png";

import "../css/views/homepage.css";
class HomePage extends Component {
  constructor() {
    super();
    this.state = { jobTitle: "", location: "", jobType: "", resume: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.props.passFormData(
      this.state.jobTitle,
      this.state.location,
      this.state.jobType
    );
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Container className="HomePage">
        <Row>
          <Col lg={6}>
            <Container className="homeGrid" id="hunterGrid">
              <Row>
                <Col lg={6}>
                  <img id="hunterMale" src={HunterMale} alt="Male Hunter" />
                </Col>
                <Col lg={6}>
                  <img
                    id="hunterFemale"
                    src={HunterFemale}
                    alt="Female Hunter"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h1>
                    Start The Hunt <br />
                    For Your Next Job
                  </h1>
                </Col>
              </Row>

              <Button
                id="register"
                className="homeButton"
                variant="success"
                onClick={this.props.changeShow}
              >
                Register
              </Button>
            </Container>
          </Col>

          <Col lg={6}>
            <Container className="homeGrid" id="quickSearchGrid">
              <h1>Quick Search</h1>
              <Form id="homeForm" onSubmit={this.handleSubmit}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Job Title
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      name="jobTitle"
                      type="text"
                      placeholder="e.g. Software Engineer"
                      onChange={event => this.handleChange(event)}
                      required
                    />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Location
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      name="location"
                      type="text"
                      placeholder="e.g. Los Angeles"
                      onChange={event => this.handleChange(event)}
                      required
                    />
                  </Col>
                </Form.Group>
                <br />
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                      Employment Type
                    </Form.Label>
                    <Col sm={3}>
                      <Form.Check
                        type="radio"
                        label="Full Time"
                        value="Full Time"
                        name="jobType"
                        onChange={event => this.handleChange(event)}
                        required
                      />
                    </Col>
                    <Col sm={3}>
                      <Form.Check
                        type="radio"
                        label="Part Time"
                        value="Part Time"
                        name="jobType"
                        onChange={event => this.handleChange(event)}
                        required
                      />
                    </Col>
                    <Col sm={3}>
                      <Form.Check
                        type="radio"
                        label="Internship"
                        value="Internship"
                        name="jobType"
                        onChange={event => this.handleChange(event)}
                        required
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <br />
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Resume
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      name="resume"
                      id="resume"
                      type="file"
                      accept=".doc,.docx,.pdf"
                      onChange={event => this.handleChange(event)}
                    />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                  <Col sm={12} id="searchButtonCol">
                    <Button
                      id="searchButton"
                      type="submit"
                      className="homeButton"
                      variant="success"
                    >
                      <img id="binoculars" src={Binoculars} alt="Binoculars" />
                      Search
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
