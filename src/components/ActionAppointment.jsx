import React from "react";
import { Row,Col,Button } from "react-bootstrap";


function ActionAppointment({deleteData,viewData}) {
  return (
    <Row className="justify-content-center my-3">
      <Col sm="8" className="d-flex justify-content-around">
        <Button onClick={viewData} className="btn btn-primary btn-style p-2">View</Button>
        <Button onClick={deleteData} className="btn btn-danger btn-style p-2">Delete All</Button>
      </Col>
    </Row>
  );
}

export default ActionAppointment;
