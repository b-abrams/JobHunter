import React from "react";
import { Button, Navbar } from "react-bootstrap";

import Hat from "../img/navigation/hat.png";

import "../css/components/navigation.css";

const Navigation = props => {
  return (
    <Navbar className="Navigation">
      <Navbar.Brand onClick={props.homeReset}>
        <Button id="logoButton" variant="link">
          <img id="safariHat" src={Hat} alt="hunter" />
          <span id="titleSpan">Job Hunter</span>
        </Button>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Button
          id="loginButton"
          variant="success"
          onClick={props.changeShowAlert}
        >
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
