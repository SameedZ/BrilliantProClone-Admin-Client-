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

const ResponsiveTables = props => {

  const [enrollmentid, setEnrollmentid] = useState(0)
  const [enrollmentexists, setEnrollmentexists] = useState(false)

  const [enrollmentdata, setEnrollmentdata] = useState()


  const [refresh, setRefresh] = React.useState(false)

  const [res_server, SetRes_server] = useState(false)
  const [server_err, setServer_err] = useState(false)

  //console.log(tasks);

  const serverurl = "http://localhost:5000/"

  function fetchEnrollmentData() {
    const url = serverurl + "enrollments/get/" + enrollmentid
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

            setEnrollmentexists(true)
            setEnrollmentdata(resp)

            
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


  const handeSubmit = e => {
    e.preventDefault()

    // regex for mongooseid validation
    const regex = /^[0-9a-fA-F]{24}$/

    if (!regex.test(enrollmentid)) {
      setEnrollmentexists(false)
      alert("Invalid Enrollment Id")
      return
    }

    fetchEnrollmentData()


    //setRefresh(true)
    // reset form
  }

  function makeRemoveRequest() {
    const url = serverurl + "enrollments/remove/" + enrollmentid
    fetch(url, {
      method: "DELETE",
      // Adding headers to the request
      headers: {
        Accept: "application/json; charset=UTF-8",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(result => {
        if (result.status === 200) {
          SetRes_server(true)
        } else {
          setServer_err(true)
        }

        //console.log(resp);
      })
      .catch(err => {
        console.log(err)
      })
  }


 const handleRemove = () => {
    makeRemoveRequest()
    
    setRefresh(true)
 }


  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Remove Enrollment", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Enrollments", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>Remove Enrollment | BrilliantPro</title>
      </MetaTags>


     
          <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h5 className="font-size-15">Remove Enrollment</h5>
              </CardTitle>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Enrollment Id
                </label>

                <div className="col-md-4">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setEnrollmentid(e.target.value)}
                    placeholder="629b610bedf25b3256bece40"
                  />
                </div>
              </Row>


              <div className="mt-4">
                <button
                  onClick={handeSubmit}
                  type="submit"
                  className="btn btn-primary w-md"
                >
                  Proceed
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
     

  {
   enrollmentdata ? 
    <Card>
        <CardBody>
            <CardTitle>
                <h5 className="font-size-15">Enrollment Details</h5>
            </CardTitle>

            {enrollmentdata ? <ViewEnrollment props={enrollmentdata} /> : null}

            <div className="mt-4">
                <button
                  onClick={handleRemove}
                  type="submit"
                  className="btn btn-secondary w-md"
                >
                  Confirm Removal
                </button>
              </div>

            </CardBody>
            
    </Card> : null

  }



      {res_server ? (
        <SweetAlert
          title="Enrollment has been Removed."
          timeout={2000}
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
          }}
          showCloseButton={false}
          showConfirm={false}
          success
          onConfirm={() => {
            SetRes_server(false)
          }}
        ></SweetAlert>
      ) : null}

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
