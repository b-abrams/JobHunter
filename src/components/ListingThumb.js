import React from "react";
import { Row, Col } from "react-bootstrap";

// export default class ListingThumb extends React.Component {
//   constructor(props) {
//     this.job = props.job;
//   }

//   render() {
//     return (
//       <Col>

//       </Col>
//     );
//   }
// }

const ListingThumb = props => {
  return (
    <Row style={{ textAlign: "left" }}>
      <Col lg={12}>
        <Row>
          <Col>{props.job.jobTitle}</Col>
        </Row>
        <Row>
          <Col>{props.job.company}</Col>
        </Row>
        <Row>
          <Col>{props.job.jobType}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ListingThumb;
