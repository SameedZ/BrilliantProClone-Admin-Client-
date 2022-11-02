import React from "react"

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
} from "reactstrap"
import { Link } from "react-router-dom"

import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"
import { set } from "lodash"

const cusImg = "http://localhost:5000/"



//import ViewEnrollment from "./ViewEnrollment"

const CourseCard = ({props}) => {
console.log("🚀 ~ file: CourseCard.jsx ~ line 30 ~ props", props)

    
// create a date object to isostring



  return (


      
      <Col mg={8} lg={8} xl={3}>
      <Card>
            <CardImg top className="img-fluid" src={cusImg+props.image} alt="Lexa" />
            <CardBody>
              
              <CardTitle className="h4">{props.title}</CardTitle>
              <CardText>
                {props.description}
                {props.image}
                  </CardText>
                  <h4>Price: <span className="badge bg-info">{props.price}</span></h4>

              <ul className="list-group list-group-flush">
              <li className="list-group-item">Author: {props.author}</li>
              <li className="list-group-item">Category: {props.category}</li>
              <li className="list-group-item">Sub Category:{props.subcategory}</li>
              <li className="list-group-item">Tags: 
              <span class="badge bg-danger">{props.tags}</span> </li>
            </ul>


            <small className="text-muted">
                  Published : {props.issueDate}
            </small>
           
           
            <Row className="mt-4 mb-3">
            <Col>
            <button
                  
                  type="submit"
                  className="btn btn-primary w-md"
                >
                  Search
            </button>
            <span> {""} </span>
            <button
                  
                  type="submit"
                  className="btn btn-secondary w-md"
                >
                  Search
            </button>
            </Col>


            {/* <Link
                to="#"
                className="btn btn-primary waves-effect waves-light"
              >
                View
                  </Link>
                  <Link
                to="#"
                className="btn btn-secondary waves-effect waves-light"
              >
                Update
                  </Link> */}
            </Row>

            </CardBody>
      </Card>
      </Col>

     
   
    
  )
}
export default connect(null, { setBreadcrumbItems })(CourseCard )
