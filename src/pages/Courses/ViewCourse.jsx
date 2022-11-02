import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle , CardImg } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
const cusImg = "http://localhost:5000/"
// props must contain only the Learner id
const ViewCourse = ({ props }) => {
  console.log(
    "🚀 ~ file: ViewLearner.jsx ~ line 10 ~ ViewLearner ~ props",
    props
  )

  return (
      
    <Row className="mb-3">
      <Col className="col-md-8" >
      
        <Card>
          <CardBody>
          <Col className="mb-3" mg={8} lg={8} xl={3}>
          <CardImg top className="img-fluid" src={cusImg+props.image} alt="BrilliantPro" />
          </Col>
            <CardTitle>
              <h5 className="font-size-18">Course# {props._id}</h5>
            </CardTitle>
            <Table className="table-borderless table-responsive-sm">
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Author</Th>
                  <Th>Price</Th>
                  <Th>Material Count</Th>
                  <Th>Category</Th>
                  <Th>Sub Category</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>

                  <Td>{props.title}</Td>
                  <Td>{props.author}</Td>
                  <Td>{props.price}</Td>
                  <Td>{props.materialCount}</Td>
                  <Td>{props.category}</Td>
                  <Td>{props.subcategory}</Td>
                  
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ViewCourse
