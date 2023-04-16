import React from 'react'
import { Row,Col } from 'react-bootstrap'



function ListAppointment({person}) {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="box p-2">
            {person.length ? (person.map((item,id)=>{
              return(
                <div className="d-flex  border-bottom mx-3 my-2" key={id}>
                <img src="m.jpg" alt="picture" className="avatar" />
                <div className="px-3">
                <p className="d-inline fs-5">{item.name}</p>
                <p className="fs-6">{item.date}</p>
                </div>
              </div>
              )
            })) : <h2 className="p-5 text-center text-warning">There are no appointments available for today</h2>}
              
            </div>
          </Col>
        </Row>
  )
}

export default ListAppointment