import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import SweetAlert from "react-bootstrap-sweetalert"
import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

import ViewLearner from "./ViewLearner"

const RemoveLearner = props => {
 
  const [learnerid, setLearnerid] = useState(0)
  const [learnexists, setLearnexists] = useState(false)
  const [learnerdata, setLearnerdata] = useState()

  const [res_server, SetRes_server] = useState(false)
  const [server_err, setServer_err] = useState(false)

  //console.log(tasks);

  const serverurl = "http://localhost:5000/"

  function makeRequest() {
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
            console.log(
              "🚀 ~ file: RemoveLearner.jsx ~ line 49 ~ result.json ~ resp",
              resp
            )

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

  function makeRemoveRequest() {
    const url = serverurl + "learners/delete/" + learnerid
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

  const handeSubmit = e => {
    e.preventDefault()

    // create regex for mongoose id
    const regex = /^[0-9a-fA-F]{24}$/
    // check if id is valid
    if (!regex.test(learnerid)) {
      alert("Invalid ID")
      return
    } else {
      alert(learnerid)
      makeRequest()
    }

  }

 


  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Remove Learner", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Learner", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>Remove Learner | BrilliantPro</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h5 className="font-size-15">Remove Learner</h5>
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

              <div className="mt-4 mb-3">
                <button
                  onClick={handeSubmit}
                  type="submit"
                  className="btn btn-secondary w-md"
                >
                  Find
                </button>
              </div>

            
              {learnerdata ? <ViewLearner props={learnerdata} /> : null}
              
              {learnerdata ?
                <div className="mt-4 mb-3">
                <button
                  onClick={makeRemoveRequest}
                  type="submit"
                  className="btn btn-secondary w-md"
                >
                  Remove
                </button>
              </div> : null}
              




            </CardBody>
          </Card>
        </Col>
      </Row>

      {res_server ? (
        <SweetAlert
          title="Learner has been removed."
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
export default connect(null, { setBreadcrumbItems })(RemoveLearner)
