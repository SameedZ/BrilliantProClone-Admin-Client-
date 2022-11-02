import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  FormGroup,
  Form
} from "reactstrap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const FormElements = (props) => {
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Forms", link: "#" },
    { title: "Form Elements", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Form Elements', breadcrumbItems)
  })

  const [toggleSwitch, settoggleSwitch] = useState(true)
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true)

  return (
    <React.Fragment>

      <MetaTags>
        <title>Form Elements | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle className="h4">Textual inputs</CardTitle>
              <p className="card-title-desc">
                Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                <code>type</code>.
                  </p>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                  Text
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="Artisanal kale"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-search-input"
                  className="col-md-2 col-form-label"
                >
                  Search
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="search"
                    defaultValue="How do I shoot web"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-email-input"
                  className="col-md-2 col-form-label"
                >
                  Email
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="email"
                    defaultValue="bootstrap@example.com"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-url-input"
                  className="col-md-2 col-form-label"
                >
                  URL
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="url"
                    defaultValue="https://getbootstrap.com"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-form-label"
                >
                  Telephone
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="tel"
                    defaultValue="1-(555)-555-5555"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-password-input"
                  className="col-md-2 col-form-label"
                >
                  Password
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="password"
                    defaultValue="hunter2"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-number-input"
                  className="col-md-2 col-form-label"
                >
                  Number
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="number"
                    defaultValue="42"
                    id="example-number-input"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-datetime-local-input"
                  className="col-md-2 col-form-label"
                >
                  Date and time
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="datetime-local"
                    defaultValue="2019-08-19T13:45:00"
                    id="example-datetime-local-input"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-date-input"
                  className="col-md-2 col-form-label"
                >
                  Date
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="date"
                    defaultValue="2019-08-19"
                    id="example-date-input"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-month-input"
                  className="col-md-2 col-form-label"
                >
                  Month
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="month"
                    defaultValue="2019-08"
                    id="example-month-input"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-week-input"
                  className="col-md-2 col-form-label"
                >
                  Week
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="week"
                    defaultValue="2019-W33"
                    id="example-week-input"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-time-input"
                  className="col-md-2 col-form-label"
                >
                  Time
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    type="time"
                    defaultValue="13:45:00"
                    id="example-time-input"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label
                  htmlFor="example-color-input"
                  className="col-md-2 col-form-label"
                >
                  Color
                    </label>
                <div className="col-md-10">
                  <input
                    className="form-control form-control-color mw-100"
                    type="color"
                    defaultValue="#556ee6"
                    id="example-color-input"
                  />
                </div>
              </Row>
              <Row className="mb-3">
                <label className="col-md-2 col-form-label">Select</label>
                <div className="col-md-10">
                  <select className="form-control">
                    <option>Select</option>
                    <option>Large select</option>
                    <option>Small select</option>
                  </select>
                </div>
              </Row>
              <Row className="mb-3">
                <label htmlFor="example-text-input-lg" className="col-md-2 col-form-label">Large</label>
                <Col md={10}>
                  <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="example-text-input-lg" />
                </Col>
              </Row>
              <Row>
                <label className="col-md-2 col-form-label">
                  Datalists
                    </label>
                <div className="col-md-10">
                  <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <h4 className="card-title">Form layouts</h4>

              <Row>
                <Col lg={5}>
                  <div className="mt-4">
                    <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Form groups</h5>
                    <Form>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="formrow-firstname-input">First name</label>
                        <input type="text" className="form-control" id="formrow-firstname-input" />
                      </div>

                      <Row>
                        <Col md={6}>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="formrow-email-input">Email</label>
                            <input type="email" className="form-control" id="formrow-email-input" />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="formrow-password-input">Password</label>
                            <input type="password" className="form-control" id="formrow-password-input" />
                          </div>
                        </Col>
                      </Row>


                      <FormGroup>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="formrow-customCheck" />
                          <label className="form-check-label" htmlFor="formrow-customCheck">Check me out</label>
                        </div>
                      </FormGroup>
                      <div className="mt-4">
                        <button type="submit" className="btn btn-primary w-md">Submit</button>
                      </div>
                    </Form>
                  </div>
                </Col>
                <Col lg={6} className="ms-lg-auto">
                  <div className="mt-5 mt-lg-4">
                    <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Horizontal form</h5>

                    <form>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">First name</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="horizontal-firstname-input" />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input type="email" className="form-control" id="horizontal-email-input" />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-9">
                          <input type="password" className="form-control" id="horizontal-password-input" />
                        </div>
                      </div>

                      <div className="row justify-content-end">
                        <div className="col-sm-9">
                          <div className="form-check mb-4">
                            <input type="checkbox" className="form-check-input" id="horizontal-customCheck" />
                            <label className="form-check-label" htmlFor="horizontal-customCheck">Remember me</label>
                          </div>

                          <div>
                            <button type="submit" className="btn btn-primary w-md">Submit</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>

              <div className="mt-4">
                <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Inline forms layout</h5>

                <form className="row gx-3 gy-2 align-items-center">
                  <div className="col-sm-2">
                    <label className="visually-hidden" htmlFor="specificSizeInputName">Name</label>
                    <input type="text" className="form-control" id="specificSizeInputName" placeholder="Enter Name" />
                  </div>
                  <div className="col-sm-2">
                    <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</label>
                    <div className="input-group">
                      <div className="input-group-text">@</div>
                      <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Username" />
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="autoSizingCheck2" />
                      <label className="form-check-label" htmlFor="autoSizingCheck2">
                        Remember me
                                                    </label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card className="mb-5">
            <CardBody>
              <CardTitle className="h4">Sizing</CardTitle>
              <p className="card-title-desc">
                Set heights using className like{" "}
                <code>.form-control-lg</code> and{" "}
                <code>.form-control-sm</code>.
                  </p>
              <div>
                <Row>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label className="form-label">Default input</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Default input"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="mb-3 mt-3">
                      <label className="form-label">Form Small input</label>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder=".form-control-sm"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mt-3 mb-0">
                      <label className="form-label">Form Large Input</label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder=".form-control-lg"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4 mb-4">Checkboxes</CardTitle>

              <Row>
                <Col md={5}>
                  <div>
                    <h5 className="font-size-14 mb-4">
                      <i
                        className="mdi mdi-arrow-right text-primary mr-1"></i> Form Checkboxes
                        </h5>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        Form Checkbox
                          </label>
                    </div>
                    <div className="form-check form-check-end">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        Form Checkbox checked
                          </label>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="ms-auto">
                  <div className="mt-md-0">
                    <h5 className="font-size-14 mb-4"><i
                      className="mdi mdi-arrow-right text-primary mr-1"></i> Form Checkboxes Right</h5>
                    <div className="form-check form-check-right mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="CustomCheck1"

                      />
                      <label
                        className="form-check-label"
                      >
                        Form Checkbox Right
                          </label>
                    </div>

                    <div className="form-check form-check-right">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck2"

                      >
                        Form Checkbox Right checked
                          </label>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4 mb-4">Radios</CardTitle>

              <Row>
                <Col md={5}>
                  <div>
                    <h5 className="font-size-14 mb-4">Form Radios</h5>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Form Radio
                          </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        Form Radio checked
                          </label>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="ml-auto">
                  <div className="mt-lg-0">
                    <h5 className="font-size-14 mb-4">Form Radios Right</h5>
                    <div>
                      <div className="form-check form-check-right mb-3">
                        <input
                          type="radio"
                          id="customRadio1"
                          name="customRadio"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio1"
                        >
                          Form Radio Right
                          </label>
                      </div>
                    </div>
                    <div>
                      <div className="form-check form-check-right">
                        <input
                          type="radio"
                          id="customRadio2"
                          name="customRadio"
                          className="form-check-input"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio2"
                        >
                          Form Radio Right checked
                          </label>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Switches</CardTitle>
              <p className="card-title-desc">
                A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a toggle switch. Switches also support the <code>disabled</code> attribute.
                  </p>
              <Row>
                <Col sm={6}>
                  <div>
                    <h5 className="font-size-14 mb-3">Switch examples</h5>
                    <div className="form-check form-switch mb-3" >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch2"
                        defaultChecked
                        onClick={e => {
                          settoggleSwitch(!toggleSwitch)
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch2"
                      >
                        Toggle this switch element
                          </label>
                    </div>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch element</label>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="mt-4 mt-lg-0">
                    <h5 className="font-size-14 mb-3">Switch sizes</h5>

                    <div
                      className="form-check form-switch mb-3"

                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizesm"
                        defaultChecked
                        // onClick={() => {
                        //   this.setState({
                        //     toggleSwitchSize: !this.state
                        //       .toggleSwitchSize,
                        //   })
                        // }}
                        onClick={e => {
                          settoggleSwitchSize(!toggleSwitchSize)
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizesm"
                      >
                        Small Size Switch
                          </label>
                    </div>

                    <div
                      className="form-check form-switch form-switch-md mb-3"

                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizemd"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizemd"
                      >
                        Medium Size Switch
                          </label>
                    </div>

                    <div
                      className="form-check form-switch form-switch-lg mb-3"
                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Large Size Switch
                          </label>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(FormElements);