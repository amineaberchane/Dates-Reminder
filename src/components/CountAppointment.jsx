import React from "react";
import { Row,Col } from "react-bootstrap";
function CountAppointment({person}) {
  return (
    <div>
      <Row className="justify-content-center my-2">
        <Col sm="8" className="text-center">
          You Have {person.length} Appointment
        </Col>
      </Row>
    </div>
  );
}

export default CountAppointment;
