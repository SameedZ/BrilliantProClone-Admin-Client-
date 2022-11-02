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

import ViewLearner from "../Learner/ViewLearner"
import ViewCourse from "../Courses/ViewCourse"

const ResponsiveTables = props => {
  // const [teams, setTeams] = React.useState(allTeams);
  // const [tasks, setTasks] = React.useState(allTeams);

  const [learnerid, setLearnerid] = useState(0)
  const [courseid, setCourseid] = useState(0)

  const [learnexists, setLearnexists] = useState(false)
  const [courseexists, setCourseexists] = useState(false)

  const [bothtrue, setBothtrue] = useState(false)

  const [coursedata, setCoursedata] = useState()
  const [learnerdata, setLearnerdata] = useState()

  const [refresh, setRefresh] = React.useState(false)

  const [res_server, SetRes_server] = useState(false)
  const [server_err, setServer_err] = useState(false)

  //console.log(tasks);

  const serverurl = "http://localhost:5000/"

  function makeRequest() {
    const url = serverurl + "enrollments/add"
    fetch(url, {
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        learnerid: learnerid,
        courseid: courseid,
      }),
      // Adding headers to the request
      headers: {
        Accept: "application/json; charset=UTF-8",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(result => {
        if (result.status === 200) {
          result.json().then(resp => {
            SetRes_server(true)
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

  function fetchLearnerData() {
    const url = serverurl + "learners/get/" + learnerid
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

            setLearnexists(true)
            setLearnerdata(resp)
            //SetRes_server(true)
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

  function fetchCourseData() {
    const url = serverurl + "courses/get/" + courseid
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
            setCoursedata(resp)
            setCourseexists(true)

            //SetRes_server(true)
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

    if (!regex.test(learnerid)) {
      setLearnexists(false)
      alert("Invalid Learner Id")
      return
    }

    if (!regex.test(courseid)) {
      setCourseexists(false)
      alert("Invalid Course Id")
      return
    }

    fetchLearnerData()
    fetchCourseData()

    if (learnexists && courseexists) {
      setBothtrue(true)
    }

    //setRefresh(true)
    // reset form
  }

  const SubmitEnrollment = e => {
    e.preventDefault()

    if (bothtrue) {
      makeRequest()
      setBothtrue(false)
    } else {
      alert("Please fill all the fields")
    }
  }

  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Add Enrollment", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Enrollments", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>Add Enrollment | BrilliantPro</title>
      </MetaTags>


      {
          bothtrue ? null : 
          <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h5 className="font-size-15">Add New Enrollment</h5>
              </CardTitle>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Learner Id
                </label>

                <div className="col-md-4">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setLearnerid(e.target.value)}
                    placeholder="629b610bedf25b3256bece40"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Course Id
                </label>

                <div className="col-md-4">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setCourseid(e.target.value)}
                    placeholder="629c9001de6ce811acacc715"
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
      }  




      {bothtrue ? (
        <Card>
          <CardBody>
            <CardTitle>
              <h5 className="font-size-15">Enrollment Details</h5>
            </CardTitle>
            {learnerdata ? <ViewLearner props={learnerdata} /> : null}
            {coursedata ? <ViewCourse props={coursedata} /> : null}

            <div className="mt-4">
              <button
                onClick={SubmitEnrollment}
                type="submit"
                className="btn btn-primary w-md"
              >
                Submit
              </button>
            </div>
          </CardBody>
        </Card>
      ) : null}

      {res_server ? (
        <SweetAlert
          title="Enrollment has been Added."
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
