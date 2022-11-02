import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

import SweetAlert from "react-bootstrap-sweetalert";
import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

const ResponsiveTables = props => {
  // const [teams, setTeams] = React.useState(allTeams);
  // const [tasks, setTasks] = React.useState(allTeams);

  const [fullname, setFullname] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [country, setCountry] = React.useState("")
  const [state, setState] = React.useState("")
  const [city, setCity] = React.useState("")
  const [zip, setZip] = React.useState("")
  const [birthdate, setBirthdate] = React.useState("")

  const [refresh, setRefresh] = React.useState(false)

  const [res_server,SetRes_server]= useState(false);
  const [server_err,setServer_err] = useState(false);

  //console.log(tasks);

  const serverurl = "http://localhost:5000/";

   function makeRequest () {

    const url = serverurl + "learners/add";
    fetch(url, {
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify({
          fullName: fullname,
            email: email,
            password: password,
            address: address,
            phone: phone,
            country: state,
            state: state,
            city: city,
            zip: zip,
            birthdate: birthdate
        }),
        // Adding headers to the request
        headers: {
          Accept: "application/json; charset=UTF-8",
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((result) => {

        if (result.status === 200) {

        result.json().then((resp) => {

          
           
            SetRes_server(true)
            setRefresh(true)
     

        })
          
        }
          else {
            
            setServer_err(true)
          }
    
          //console.log(resp);
        }).catch((err)=>{
        console.log(err);
      }); 


   }


  const handeSubmit = e => {
    e.preventDefault()
    
    const data = {
      fullname: fullname,
      email: email,
      password: password,
      address: address,
      phone: phone,
      country: country,
      state: state,
      city: city,
      zip: zip,
      birthdate: birthdate,
    }
    console.log(
      "🚀 ~ file: AddLearner.jsx ~ line 50 ~ handeSubmit ~ data",
      data
    )

    makeRequest()

    setRefresh(true)
    // reset form
  }

  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Add Learner", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Learner", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>Add Learner | BrilliantPro</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h5 className="font-size-15">Add New Learner</h5>
              </CardTitle>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Full Name
                </label>

                <div className="col-md-4">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setFullname(e.target.value)}
                    placeholder="Sameed Zahoor"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-email-input"
                  className="col-md-1 col-form-label"
                >
                  Email
                </label>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="bootstrap@example.com"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-password-input"
                  className="col-md-1 col-form-label"
                >
                  Password
                </label>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    defaultValue="hunter2"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Address
                </label>

                <div className="col-md-7">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setAddress(e.target.value)}
                    placeholder="A Block-Street 9, City, Country"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  City
                </label>

                <div className="col-md-3">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setCity(e.target.value)}
                    placeholder="Islamabad"
                  />
                </div>

                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  State/Country
                </label>

                <div className="col-md-3">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setState(e.target.value)}
                    placeholder="Islamabad"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-date-input"
                  className="col-md-1 col-form-label"
                >
                  Birth Date
                </label>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    type="date"
                    defaultValue="2019-08-19"
                    id="example-date-input"
                    onChange={e => setBirthdate(e.target.value)}
                  />
                </div>

                <label
                  htmlFor="example-number-input"
                  className="col-md-1 col-form-label"
                >
                  Zip Code
                </label>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="38000"
                    onChange={e => setZip(e.target.value)}
                    id="example-number-input"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Phone
                </label>

                <div className="col-md-3">
                  <input
                    className="form-control"
                    type="text"
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+92315-1234567"
                  />
                </div>
              </Row>

              <div className="mt-4">
                <button
                  onClick={handeSubmit}
                  type="submit"
                  className="btn btn-primary w-md"
                >
                  Submit
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {res_server? <SweetAlert
                      title="Learner has been Added."
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
                    ></SweetAlert>:null}

                    { server_err ? <SweetAlert
                      title="Error"
                      warning
                      onConfirm={() => {
                        setServer_err(false)
                      }}
                    >
                      Oops Something went wrong processing your request. Try again.
                    </SweetAlert>:null} 


    </React.Fragment>
  )
}
export default connect(null, { setBreadcrumbItems })(ResponsiveTables)
