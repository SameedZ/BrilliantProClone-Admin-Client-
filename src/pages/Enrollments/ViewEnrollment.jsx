import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

// props must contain only the Learner id
const ViewEnrollment = ({ props }) => {
console.log("🚀 ~ file: ViewEnrollment.jsx ~ line 10 ~ ViewCourse ~ props", props)
 

  return (
      
    <Row className="mb-3">
      <Col className="col-md-8" >
      
        <Card>
          <CardBody>
            <CardTitle>
              <h5 className="font-size-18">Enrollment# {props._id}</h5>
            </CardTitle>
            <Table className="table-borderless table-responsive-sm">
              <Thead>
                <Tr>
                  <Th>Course Id</Th>
                  <Th>Learner Id</Th>
                  <Th>Progress %</Th>
                  <Th>Enroll Date</Th>
                  <Th>Rating</Th>
                  <Th>Certificate</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>

                  <Td>{props.courseid}</Td>
                  <Td>{props.learnerid}</Td>
                  <Td>{props.progress}</Td>
                  <Td>{props.startdate}</Td>
                  <Td>{props.rating}</Td>
                  <Td>{props.certificateurl}</Td>
                  
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ViewEnrollment
