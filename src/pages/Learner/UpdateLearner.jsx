import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import SweetAlert from "react-bootstrap-sweetalert"
import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"






const UpdateLearnerCard = ({props}) => {


    const [fullname, setFullname] = React.useState(props.fullName);
    const [email, setEmail] = React.useState(props.email);
    const [password, setPassword] = React.useState(props.password);
    const [address, setAddress] = React.useState(props.address);
    const [phone, setPhone] = React.useState(props.phone)
    const [country, setCountry] = React.useState(props.country)
    const [state, setState] = React.useState(props.state)
    const [city, setCity] = React.useState(props.city)
    const [zip, setZip] = React.useState(props.zip)
    const [birthdate, setBirthdate] = React.useState(props.dateOfBirth)

    const [res_server, SetRes_server] = useState(false)
    const [server_err, setServer_err] = useState(false)

    const serverurl = "http://localhost:5000/";

    function makeRequest () {
 
     const url = serverurl + "learners/update/"+props.learnerid;
     fetch(url, {
         method: "PUT",
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

             console.log(resp);
            
             SetRes_server(true)
             //setRefresh(true)
      
 
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
     console.log("🚀 ~ file: UpdateLearner.jsx ~ line 101 ~ UpdateLearnerCard ~ data", data)
     
 
     makeRequest()
 
     
     // reset form
   }



return (

    <React.Fragment>
        <Row>
            <Col>

                <Card>
                    <CardBody>
                        <CardTitle>
                        
                            <h3>Information Learner# {props.learnerid}</h3>
                        </CardTitle>
                        <p>Change the information and Confirm to Submit</p>
                        
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
                    defaultValue={fullname}
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
                    defaultValue={email}
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
                    defaultValue={password}
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
                    defaultValue={address}
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
                    defaultValue={city}
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
                    defaultValue={state}
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
                    defaultValue={birthdate}
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
                    defaultValue={zip}
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
                    defaultValue={phone}
                  />
                </div>
              </Row>
              <div className="mt-4">
                <button
                  onClick={handeSubmit}
                  type="submit"
                  className="btn btn-primary w-md"
                >
                  Update Information
                </button>
              </div>
                
                        </CardBody>
                    </Card>
                </Col>

        </Row>

        {res_server? <SweetAlert
                      title="Learner Information Updated"
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
                      Oops Something went wrong processing your Update Request. Try again.
                    </SweetAlert>:null} 


    </React.Fragment>



)


}





const UpdateLearners = props => {
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

  const [search, setSearch] = React.useState(false)

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

            setAddress(resp.address)
            setCity(resp.city)
            setCountry(resp.country)
            setBirthdate(resp.dateOfBirth)
            setEmail(resp.email)
            setFullname(resp.fullName)
            setPhone(resp.phone)
            setState(resp.state)
            setZip(resp.zip)

            setSearch(true)
            console.log(email)
            setLearnexists(true)
            // add learnerid to resp
            const obj = resp;
            obj.learnerid = learnerid;

            setLearnerdata(obj)
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

  const ResetSearch = () => {
    setSearch(false)
    setLearnerid("")
    setLearnexists(false)
    setLearnerdata()
    SetRes_server(false)

  }


  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Update Learner", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Learner", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>Update Learner | BrilliantPro</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h5 className="font-size-15">Update Learner Information</h5>
              </CardTitle>

              <Row className="mb-3">


                {
                    search ? null : <div>
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
                </div>
                }



              </Row>

              {search ? null : (
                <div className="mt-4 mb-3">
                  <button
                    onClick={handeSubmit}
                    type="submit"
                    className="btn btn-secondary w-md"
                  >
                    Search
                  </button>
                </div>
              )}

              {/* {learnerdata  ? <ViewLearner props={learnerdata} /> : null}  */}
              {learnerdata ? <UpdateLearnerCard props={learnerdata}  />  : null}

              {search ?  (
                <div className="mt-4 mb-3">
                  <button
                    onClick={ResetSearch}
                    type="submit"
                    className="btn btn-secondary w-md"
                  >
                    Cancel Update
                  </button>
                </div>
              ):null }



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
export default connect(null, { setBreadcrumbItems })(UpdateLearners)
