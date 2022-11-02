import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"


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


import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

import SweetAlert from "react-bootstrap-sweetalert"
import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"
import { set } from "lodash"

import { Link } from "react-router-dom"

import img1 from "../../assets/images/small/img-1.jpg"


import ViewEnrollment from "./ViewEnrollment"

const ResponsiveTables = props => {

  const [res_server, SetRes_server] = useState(false)
  const [server_err, setServer_err] = useState(false)

  //console.log(tasks);

  const serverurl = "http://localhost:5000/"

  const [allenrollments, setAllEnrollments] = useState([])


  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "View All", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Enrollments", breadcrumbItems);

    console.log("useEffect") 
    if (allenrollments.length === 0) {
    const url = serverurl + "enrollments/getall/"
    fetch(url, {
      method: "GET",
      // Adding headers to the request
      headers: {
        Accept: "application/json; charset=UTF-8",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(result => {
        if (result.status === 200) {
          result.json().then(resp => {
            console.log(resp)

            setAllEnrollments(resp)
          })
        } else {
          setServer_err(true)
        }

        //console.log(resp);
      })
      .catch(err => {
        console.log(err)
      })


    }



  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>View Enrollments | BrilliantPro</title>
      </MetaTags>

 
      {allenrollments
        ? allenrollments.map((enrollment, index) => {
            return <ViewEnrollment key={index} props={enrollment} />
          })
        : null}




      {server_err ? (
        <SweetAlert
          title="Error"
          warning
          onConfirm={() => {
            setServer_err(false)
          }}
        >
          Oops Something went wrong processing your request. Try again.
        </SweetAlert>
      ) : null}
    </React.Fragment>
  )
}
export default connect(null, { setBreadcrumbItems })(ResponsiveTables)
