import React from "react";
import { Spinner } from "react-bootstrap";

const styleNoJobRender = {
  textAlign: "center",
  fontSize: "2vh"
};

const styleJobRender = {
  textAlign: "left",
  fontSize: "2vh"
};

const ListingThumb = props => {
  if (props.loading === true) {
    return (
      <div style={styleNoJobRender}>
        <Spinner
          animation="border"
          variant="light"
          style={{ width: "8vh", height: "8vh" }}
        />
      </div>
    );
  } else {
    return (
      <div style={styleJobRender}>
        {props.job.jobTitle}
        <br />
        {props.job.company}
        <br />
        {props.job.jobType}
      </div>
    );
  }
};

export default ListingThumb;
