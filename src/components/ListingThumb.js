import React from "react";

const style = {
  textAlign: "left",
  fontSize: "2vh"
};

const ListingThumb = props => {
  return (
    <div style={style}>
      {props.job.jobTitle}
      <br />

      {props.job.company}
      <br />

      {props.job.jobType}
    </div>
  );
};

export default ListingThumb;
