import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";

import ListingThumb from "../components/ListingThumb";
import JobInformation from "../components/JobInformation";

import "../css/views/listings.css";
export default class Lisitings extends Component {
  constructor(props) {
    super(props);

    this.state = { current: null };

    this.createJobThumbs = this.createJobThumbs.bind(this);
  }

  createJobThumbs() {
    if (this.props.loading === true) {
      const loadButtonList = Array(9).fill(
        <Button variant="success" className="listingThumbButton">
          <ListingThumb loading={this.props.loading} />
        </Button>
      );

      return loadButtonList.map(thumb => thumb);
    } else {
      return this.props.jobs.map(job => (
        <Button
          variant="success"
          className="listingThumbButton"
          onClick={event => this.setState({ current: job })}
        >
          <ListingThumb job={job} loading={this.props.loading} />
        </Button>
      ));
    }
  }

  render() {
    return (
      <Row className="lisitngs">
        <Col id="lsitingThumbCol" className="listingsCol" lg={4}>
          {this.createJobThumbs()}
        </Col>
        <Col id="jobInfo" className="listingsCol" lg={8}>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} id="jobInfoInnerCol">
              <JobInformation
                job={this.state.current}
                loading={this.props.loading}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
