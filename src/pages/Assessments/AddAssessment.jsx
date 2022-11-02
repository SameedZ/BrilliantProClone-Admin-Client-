import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import SweetAlert from "react-bootstrap-sweetalert"
import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

import ViewCourse from "../Courses/ViewCourse"

const AddAssessment = props => {
  const [courseid, setCourseid] = useState(0)
  const [courseexists, setCourseexists] = useState(false)
  const [coursedata, setCoursedata] = useState()

  const [res_server, SetRes_server] = useState(false)
  const [server_err, setServer_err] = useState(false)

  //console.log(tasks);

  const serverurl = "http://localhost:5000/"

  function makeRequest() {
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

    // create regex for mongoose id
    const regex = /^[0-9a-fA-F]{24}$/
    // check if id is valid
    if (!regex.test(courseid)) {
      alert("Invalid ID")
      return
    } else {
      alert(courseid)
      makeRequest()
    }
  }

  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Upload Assessment", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Assessment", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>Upload Assessment | BrilliantPro</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h5 className="font-size-15">Course Id Required*</h5>
              </CardTitle>

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
                    placeholder="629b610bedf25b3256bece40"
                  />
                </div>
              </Row>

              <div className="mt-4 mb-3">
                <button
                  onClick={handeSubmit}
                  type="submit"
                  className="btn btn-secondary w-md"
                >
                  Search
                </button>
              </div>
              
              {coursedata ? <ViewCourse props={coursedata} /> : null}

            </CardBody>
          </Card>
        </Col>
      </Row>

      

      {coursedata ? <AddDetails props={courseid}/> : null}



      {server_err ? (
        <SweetAlert
          title="Error"
          warning
          onConfirm={() => {
            setServer_err(false)
          }}
        >
          Could not find the course. Some Error occured.
        </SweetAlert>
      ) : null}
    </React.Fragment>
  )
}

const AddDetails = ({props}) => {
console.log("🚀 ~ file: AddAssessment.jsx ~ line 147 ~ AddDetails ~ props", props)
const courseid = props

   const [assessmentid, setAssessmentid] = useState(0)
   const [assessmentexists, setAssessmentexists] = useState(false)

   const handleSubmit = e => {
    e.preventDefault()
    setAssessmentexists(true)


   }

  return (
    <React.Fragment>

     {
         assessmentexists ?<AddQuestion props={assessmentid} />  :
         <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle
              >
                <h5 className="mb-4 font-size-15">Course# {courseid}</h5>
              </CardTitle>
              <CardTitle>
                <h5 className="mb-4 font-size-15">Assessment Details Required</h5>
              </CardTitle>
     

              <Row className="mb-3">
                <label
                  htmlFor="example-number-input"
                  className="col-md-1 col-form-label"
                >
                  Time Duration (in minutes)
                </label>
                <div className="col-md-2">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="30"
                    id="example-number-input"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-number-input"
                  className="col-md-1 col-form-label"
                >
                  Passing Marks
                </label>
                <div className="col-md-2">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="30"
                    id="example-number-input"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-number-input"
                  className="col-md-1 col-form-label"
                >
                  Each Question Weightage
                </label>
                <div className="col-md-2">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="10"
                    id="example-number-input"
                  />
                </div>


                <div className="mt-4 mb-3">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary w-md"
                >
                  Submit
                </button>
              </div>


                        

              </Row>
            </CardBody>
          </Card>
        </Col>
        </Row>

     }   



      


    </React.Fragment>
  )
}


const AddQuestion = ({props}) => {
    
    const assessmentid = props
    
      return (
        <React.Fragment>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle
                  >
                  <h5 className="mb-4 font-size-15">Assessment# {assessmentid}</h5>
                    <h5 className="mb-4 font-size-15">Question</h5>
                  </CardTitle>
       
         
                  <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                 Question Statement
                </label>

                <div className="col-md-8">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                   
                    placeholder="What is the current version of React ?"
                  />
                </div>
              </Row>


              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                 Option 1
                </label>

                <div className="col-md-5">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                
                    placeholder="16"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                 Option 2
                </label>

                <div className="col-md-5">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                
                    placeholder="16"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                 Option 3
                </label>

                <div className="col-md-5">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                
                    placeholder="16"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                 Option 4
                </label>

                <div className="col-md-5">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                
                    placeholder="18"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                 Correct Option
                </label>

                <div className="col-md-5">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                
                    placeholder="18"
                  />
                </div>
              </Row>    

              <Row className="mt-4 mb-3">
            <Col>
            <button
                  
                  type="submit"
                  className="btn btn-primary w-md"
                >
                  Add
            </button>
            <span> {""} </span>
            <button
                  
                  type="submit"
                  className="btn btn-secondary w-md"
                >
                  Finish
            </button>
            </Col>
            </Row>


                
                </CardBody>
              </Card>
            </Col>
          </Row>
        </React.Fragment>
      )
    }


export default connect(null, { setBreadcrumbItems })(AddAssessment)
