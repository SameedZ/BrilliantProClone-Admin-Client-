import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

// props must contain only the Learner id
const ViewLearner = ({ props }) => {
  console.log(
    "🚀 ~ file: ViewLearner.jsx ~ line 10 ~ ViewLearner ~ props",
    props
  )

  return (
      
    <Row className="mb-3">
      <Col className="col-md-8" >
      
        <Card>
          <CardBody>
            <CardTitle>
              <h5 className="font-size-18">Learner# {props._id}</h5>
            </CardTitle>
            <Table className="table-borderless table-responsive-sm">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>City</Th>
                  <Th>Country</Th>
                  <Th>Birthday</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{props.fullName}</Td>
                  <Td>{props.email}</Td>
                  <Td>{props.phone}</Td>
                  <Td>{props.city}</Td>
                  <Td>{props.country}</Td>
                  <Td>{props.dateOfBirth}</Td>
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ViewLearner
