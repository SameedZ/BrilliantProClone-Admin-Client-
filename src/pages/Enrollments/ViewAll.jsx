import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

import SweetAlert from "react-bootstrap-sweetalert"
import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"
import { set } from "lodash"


import ViewEnrollment from "./ViewEnrollment"

const Viewer = props => {
  const [allenrollments, setAllEnrollments] = useState([])

  const serverurl = "http://localhost:5000/"

  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Remove Enrollment", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Enrollments", breadcrumbItems)
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
  }, [])





  return (
    <React.Fragment>
      <MetaTags>
        <title>View All Enrollment | BrilliantPro</title>
      </MetaTags>

      {allenrollments
        ? allenrollments.map((enrollment, index) => {
            return <ViewEnrollment key={index} props={enrollment} />
          })
        : null}
    </React.Fragment>
  )
}


export default Viewer
