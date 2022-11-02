import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  Label,
  Input,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const FormValidations = (props) => {
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Forms", link: "#" },
    { title: "Form Validation", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Form Validation', breadcrumbItems)
  })


  const [fnm, setfnm] = useState(false)
  const [lnm, setlnm] = useState(false)
  const [unm, setunm] = useState(false)
  const [city, setcity] = useState(false)
  const [stateV, setstateV] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    var fnm = document.getElementById("validationTooltip01").value
    var lnm = document.getElementById("validationTooltip02").value
    var unm = document.getElementById("validationTooltipUsername").value
    var city = document.getElementById("validationTooltip03").value
    var stateV = document.getElementById("validationTooltip04").value

    if (fnm === "") {
      setfnm(false)
    } else {
      setfnm(true)
    }

    if (lnm === "") {
      setlnm(false)
    } else {
      setlnm(true)
    }

    if (unm === "") {
      setunm(false)
    } else {
      setunm(true)
    }

    if (city === "") {
      setcity(false)
    } else {
      setcity(true)
    }

    if (stateV === "") {
      setstateV(false)
    } else {
      setstateV(true)
    }

    var d1 = document.getElementsByName("validate")

    document.getElementById("tooltipForm").classList.add("was-validated")

    for (var i = 0; i < d1.length; i++) {
      d1[i].style.display = "block"
    }
  }

  //for change tooltip display propery
  function changeHandeler(event, eleId) {
    if (event.target.value !== "")
      document.getElementById(eleId).style.display = "none"
    else document.getElementById(eleId).style.display = "block"
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Form Validation | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col xl="6">
          <Card>
            <CardBody>
              <h4 className="card-title">React Validation - Normal</h4>
              <p className="card-title-desc">
                Provide valuable, actionable feedback to your users with
                HTML5 form validation–available in all our supported
                browsers.
                  </p>
              <AvForm className="needs-validation">
                <Row>
                  <Col md="6">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom01">First name</Label>
                      <AvField
                        name="firstname"
                        placeholder="First name"
                        type="text"
                        errorMessage="Enter First Name"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom01"
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom02">Last name</Label>
                      <AvField
                        name="lastname"
                        placeholder="Last name"
                        type="text"
                        errorMessage="Enter Last name"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom02"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom03">City</Label>
                      <AvField
                        name="city"
                        placeholder="City"
                        type="text"
                        errorMessage=" Please provide a valid city."
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom03"
                      />
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom04">State</Label>
                      <AvField
                        name="state"
                        placeholder="State"
                        type="text"
                        errorMessage="Please provide a valid state."
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom04"
                      />
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom05">Zip</Label>
                      <AvField
                        name="zip"
                        placeholder="Zip Code"
                        type="text"
                        errorMessage=" Please provide a valid zip."
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom05"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="invalidCheck"
                    required />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                                        </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                                        </div>
                </div>
                <Button color="primary" type="submit">
                  Submit form
                    </Button>
              </AvForm>
            </CardBody>
          </Card>
        </Col>

        <Col xl="6">
          <Card>
            <CardBody>
              <h4 className="card-title">
                Bootstrap Validation (Tooltips)
                  </h4>
              <p className="card-title-desc">
                If your form layout allows it, you can swap the
                    <code>.{"{valid | invalid-}"}feedback</code> classes for
                    <code>.{"{valid | invalid-}"}-tooltip</code> classes to display validation feedback in a
                    styled tooltip.
                  </p>
              <form
                className="needs-validation"
                method="post"
                id="tooltipForm"
                onSubmit={e => {
                  handleSubmit(e)
                }}
              >
                <Row>
                  <Col md="4">
                    <div className="mb-3 position-relative">
                      <Label htmlFor="validationTooltip01">
                        First name
                          </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="validationTooltip01"
                        placeholder="First name"
                        onChange={event =>
                          changeHandeler(event, "validate1")
                        }
                      />

                      <div
                        className={
                          fnm === true ? "valid-tooltip" : "invalid-tooltip"
                        }
                        name="validate"
                        id="validate1"
                      >
                        {fnm === true
                          ? "Looks good!"
                          : "Please Enter Valid First Name"}
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3 position-relative">
                      <Label htmlFor="validationTooltip02">Last name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="validationTooltip02"
                        placeholder="Last name"
                        onChange={event =>
                          changeHandeler(event, "validate2")
                        }
                      />
                      <div
                        className={
                          lnm === true ? "valid-tooltip" : "invalid-tooltip"
                        }
                        name="validate"
                        id="validate2"
                      >
                        {lnm === true
                          ? "Looks good!"
                          : "Please Enter Valid Last Name"}
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3 position-relative">
                      <Label htmlFor="validationTooltipUsername">
                        Username
                          </Label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="validationTooltipUsernamePrepend"
                          >
                            @
                              </span>
                        </div>
                        <Input
                          type="text"
                          className="form-control"
                          id="validationTooltipUsername"
                          placeholder="Username"
                          onChange={event =>
                            changeHandeler(event, "validate3")
                          }
                        />
                        <div
                          className={
                            unm === true
                              ? "valid-tooltip"
                              : "invalid-tooltip"
                          }
                          name="validate"
                          id="validate3"
                        >
                          {unm === true
                            ? "Looks good!"
                            : "Please choose a unique and valid username."}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="mb-3 position-relative">
                      <Label htmlFor="validationTooltip03">City</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="validationTooltip03"
                        placeholder="City"
                        onChange={event =>
                          changeHandeler(event, "validate4")
                        }
                      />
                      <div
                        className={
                          city === true
                            ? "valid-tooltip"
                            : "invalid-tooltip"
                        }
                        name="validate"
                        id="validate4"
                      >
                        {city === true
                          ? "Looks good!"
                          : "Please choose a unique and valid username.Please provide a valid city."}
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="mb-3 position-relative">
                      <Label htmlFor="validationTooltip04">State</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="validationTooltip04"
                        placeholder="State"
                        onChange={event =>
                          changeHandeler(event, "validate5")
                        }
                      />
                      <div
                        className={
                          stateV === true
                            ? "valid-tooltip"
                            : "invalid-tooltip"
                        }
                        name="validate"
                        id="validate5"
                      >
                        {stateV === true
                          ? "Looks good!"
                          : "Please provide a valid state."}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Button color="primary" type="submit">
                  Submit form
                    </Button>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Validation type</CardTitle>
              <p className="card-title-desc">
                Parsley is a availity reactstrap validation. It helps you
                provide your users with feedback on their form submission
                before sending it to your server.
                  </p>

              <AvForm>
                <AvField
                  className="mb-3"
                  name="username"
                  label="Required  "
                  placeholder="Type Something"
                  type="text"
                  errorMessage="Enter Name"
                  validate={{ required: { value: true } }}
                />
                <Label>Equal To</Label>
                <AvField
                  className="mb-3"
                  name="password"
                  type="password"
                  placeholder="Password"
                  errorMessage="Enter password"
                  validate={{ required: { value: true } }}
                />
                <AvField
                  className="mb-3"
                  name="password1"
                  type="password"
                  placeholder="Re-type Password"
                  errorMessage="Enter Re-password"
                  validate={{
                    required: { value: true },
                    match: { value: "password" },
                  }}
                />
                <AvField
                  className="mb-3"
                  name="email"
                  label="E-Mail  "
                  placeholder="Enter Valid Email"
                  type="email"
                  errorMessage="Invalid Email"
                  validate={{
                    required: { value: true },
                    email: { value: true },
                  }}
                />
                <AvField
                  className="mb-3"
                  name="digits"
                  label="Digits  "
                  placeholder="Enter Only Digits"
                  type="number"
                  errorMessage="Enter Only Digits"
                  validate={{
                    required: { value: true },
                    pattern: {
                      value: "^[0-9]+$",
                      errorMessage: "Only Digits",
                    },
                  }}
                />
                <AvField
                  className="mb-3"
                  name="number"
                  label="Number  "
                  placeholder="Enter Only number"
                  type="number"
                  errorMessage="Enter Only Number"
                  validate={{
                    required: { value: true },
                    pattern: {
                      value: "^[0-9]+$",
                      errorMessage: "Only Numbers",
                    },
                  }}
                />
                <AvField
                  className="mb-3"
                  name="alphanumeric"
                  label="Alphanumeric  "
                  placeholder="Enter Only alphanumeric value"
                  type="text"
                  errorMessage="Enter Only Alphanumeric"
                  validate={{
                    required: { value: true },
                    pattern: {
                      value: "^[0-9a-zA-Z]+$",
                      errorMessage: "Only Alphanumeric",
                    },
                  }}
                />
                <AvField
                  className="mb-3"
                  type="textarea"
                  label="Textarea "
                  name="address"
                  id="address"
                  rows="5"
                  placeholder="Address"
                  errorMessage="This value is required."
                  validate={{
                    required: { value: true },
                    pattern: {
                      value: "^[0-9a-zA-Z]+$",
                      errorMessage: "Only Alphanumeric",
                    },
                  }}
                />
                <FormGroup className="mb-0">
                  <div>
                    <Button type="submit" color="primary" className="ms-1">
                      Submit
                        </Button>{" "}
                    <Button type="reset" color="secondary">
                      Cancel
                        </Button>
                  </div>
                </FormGroup>
              </AvForm>
            </CardBody>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Range validation</CardTitle>
              <p className="card-title-desc">
                Parsley is a availity reactstrap validation. It helps you
                provide your users with feedback on their form submission
                before sending it to your server.
                  </p>

              <AvForm>
                <AvField
                  className="mb-3"
                  name="Min_Length"
                  label="Min Length  "
                  placeholder="Min 6 chars"
                  type="number"
                  errorMessage="Min 6 chars."
                  validate={{
                    required: { value: true },
                    minLength: { value: 6, errorMessage: "Min 6 chars." },
                  }}
                />
                <AvField
                  className="mb-3"
                  name="Max_Length"
                  label="Max Length  "
                  placeholder="Max 6 chars"
                  type="number"
                  errorMessage="Max 6 chars."
                  validate={{
                    required: { value: true },
                    maxLength: { value: 6, errorMessage: "Max 6 chars." },
                  }}
                />
                <AvField
                  className="mb-3"
                  name="Range_Length"
                  label="Range Length"
                  placeholder="Text between 5 - 10 chars length"
                  type="number"
                  errorMessage="Text between 5 - 10 chars length"
                  validate={{
                    required: { value: true },
                    minLength: { value: 5 },
                    maxLength: { value: 10 },
                  }}
                />
                <AvField
                  className="mb-3"
                  name="Min_Value"
                  label="Min Value  "
                  placeholder="Min 6 Chars"
                  min={6}
                  type="number"
                  errorMessage="Min Value 6"
                  validate={{
                    required: { value: true },
                    min: { value: 6 },
                  }}
                />
                <AvField
                  className="mb-3"
                  name="Max_Value"
                  label="Max Value  "
                  placeholder="max 5 Chars"
                  max={6}
                  type="number"
                  errorMessage="Max Value 6"
                  validate={{
                    required: { value: true },
                    max: { value: 6 },
                  }}
                />
                <AvField
                  className="mb-3"
                  name="Range_Value"
                  label="Range Value"
                  placeholder="Number between 6 - 100"
                  type="number"
                  errorMessage="Number between 6 - 100"
                  validate={{
                    required: { value: true },
                    min: { value: 6 },
                    max: { value: 10 },
                  }}
                />

                <AvField
                  className="mb-3"
                  name="Regular_Exp"
                  label="Regular Exp  "
                  placeholder="Hex. Color"
                  type="number"
                  errorMessage="Hex Value"
                  validate={{
                    required: { value: true },
                    pattern: {
                      value: "^[#0-9]+$",
                      errorMessage: "Only Hex Value",
                    },
                  }}
                />
                <FormGroup className="mb-0">
                  <div>
                    <Button type="submit" color="primary" className="ms-1">
                      Submit
                        </Button>{" "}
                    <Button type="reset" color="secondary">
                      Cancel
                        </Button>
                  </div>
                </FormGroup>
              </AvForm>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(FormValidations);