import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const JobInformation = props => {
  if (props.job === null) {
    return (
      <Container style={{ width: "60%", position: "sticky" }}>
        <Row>
          <Col>{"Please Click on a Job"}</Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container style={{ width: "60%", position: "sticky" }}>
        <Row>
          <Col>{props.job.jobTitle}</Col>
        </Row>
        <Row>
          <Col>{props.job.company}</Col>
        </Row>
        <Row>
          <Col>{props.job.jobType}</Col>
        </Row>
        <Row>
          <Col>{"% Resume Match: " + Math.random() * 101}</Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" href={props.job.link}>
              {"Apply through " + props.job.source}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>{props.job.jobDescription}</Col>
        </Row>
      </Container>
    );
  }
};

export default JobInformation;
