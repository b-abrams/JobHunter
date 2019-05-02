import React, { Component } from "react";
import { Button } from "react-bootstrap";

import ListingThumb from "../components/ListingThumb";
import JobInformation from "../components/JobInformation";

export default class Lisitings extends Component {
  constructor(props) {
    super(props);

    this.state = { current: null };

    this.createThumbs = this.createThumbs.bind(this);
  }

  createThumbs() {
    return this.props.jobs.map(job => (
      <Button
        variant="success"
        style={{ display: "block", width: "40%" }}
        onClick={event => this.setState({ current: job })}
      >
        <ListingThumb job={job} />
      </Button>
    ));
  }

  render() {
    return (
      <div>
        <div
          style={{
            float: "left",
            display: "inline"
          }}
        >
          {this.createThumbs()}
        </div>
        <div
          style={{
            clear: "left",
            display: "inline"
          }}
        >
          <JobInformation job={this.state.current} />
        </div>
      </div>
    );
  }
}
