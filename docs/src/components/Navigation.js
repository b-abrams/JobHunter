import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import Hat from "../img/navigation/hat.png";

import "../css/components/navigation.css";

const Navigation = props => {
  return (
    <Container className="Navigation">
      <Row>
        <Col lg={6} onClick={props.homeReset}>
          <Button id="logoButton" variant="link">
            <img id="safariHat" src={Hat} alt="hunter" />
            <span id="titleSpan">Job Hunter</span>
          </Button>
        </Col>
        <Col lg={6} align="center">
          <Button id="loginButton" variant="success">
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
