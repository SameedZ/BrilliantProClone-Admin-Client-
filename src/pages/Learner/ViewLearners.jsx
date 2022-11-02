import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import SweetAlert from "react-bootstrap-sweetalert"
import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

import ViewLearner from "./ViewLearner"

const ViewLearners = props => {
 
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
    { title: "View Learner", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Learner", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>View Learner | BrilliantPro</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h5 className="font-size-15">Search Any Learner</h5>
              </CardTitle>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Search Learner 
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
                  Search
                </button>
              </div>

            
              {learnerdata ? <ViewLearner props={learnerdata} /> : null}
              
              
              




            </CardBody>
          </Card>
        </Col>
      </Row>

    
   {server_err ? (
        <SweetAlert
          title="Error"
          warning
          onConfirm={() => {
            setServer_err(false)
          }}
        >
          Could not find the learner. Some Error occured.
        </SweetAlert>
      ) : null}
    </React.Fragment>
  )
}
export default connect(null, { setBreadcrumbItems })(ViewLearners)
