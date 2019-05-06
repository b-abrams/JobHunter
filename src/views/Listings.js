import React, { Component } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

import ListingThumb from "../components/ListingThumb";
import JobInformation from "../components/JobInformation";

import "../css/views/listings.css";
export default class Lisitings extends Component {
  constructor(props) {
    super(props);

    this.resumeText = this.props.resume;
    this.state = { currentJobToRender: null };

    this.createJobThumbs = this.createJobThumbs.bind(this);
  }

  createJobThumbs() {
    if (this.props.loadingJobListings || this.props.loadingResumeText) {
      const loadButtonList = Array(9).fill(
        <Button variant="success" className="listingThumbButton">
          <ListingThumb loading={true} />
        </Button>
      );
      return loadButtonList.map(thumb => thumb);
    } else {
      return this.props.jobs.map(job => (
        <Button
          variant="success"
          className="listingThumbButton"
          onClick={event => this.setState({ currentJobToRender: job })}
        >
          <ListingThumb job={job} loading={false} />
        </Button>
      ));
    }
  }

  render() {
    return (
      <Container className="lisitngs" fluid>
        <Row>
          <Col id="lsitingThumbCol" className="listingsCol" lg={4}>
            {this.createJobThumbs()}
          </Col>
          <Col id="jobInfo" className="listingsCol" lg={{ span: 8 }}>
            <Row>
              <Col lg={{ span: 8, offset: 2 }} id="jobInfoInnerCol">
                <JobInformation
                  job={this.state.currentJobToRender}
                  loading={
                    this.props.loadingJobListings ||
                    this.props.loadingResumeText
                  }
                  resumeText={this.props.resumeText}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
