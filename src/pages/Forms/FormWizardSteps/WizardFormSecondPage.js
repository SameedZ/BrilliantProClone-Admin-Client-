import PropTypes from 'prop-types'
import React from "react"
import { reduxForm } from "redux-form"
import validate from "./validate"
import { Row, Col } from "reactstrap"

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <h6 className="text-muted">Company Document</h6>
      <fieldset>
        <Row>
          <Col md={6}>
            <div className="form-group row">
              <label
                htmlFor="txtFirstNameShipping"
                className="col-lg-3 col-form-label"
              >
                PAN Card
              </label>
              <Col lg={9}>
                <input
                  id="txtFirstNameShipping"
                  name="txtFirstNameShipping"
                  type="text"
                  className="form-control"
                />
              </Col>
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group row">
              <label
                htmlFor="txtLastNameShipping"
                className="col-lg-3 col-form-label"
              >
                VAT/TIN No.
              </label>
              <Col lg={9}>
                <input
                  id="txtLastNameShipping"
                  name="txtLastNameShipping"
                  type="text"
                  className="form-control"
                />
              </Col>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="form-group row">
              <label
                htmlFor="txtCompanyShipping"
                className="col-lg-3 col-form-label"
              >
                CST No.
              </label>
              <Col lg={9}>
                <input
                  id="txtCompanyShipping"
                  name="txtCompanyShipping"
                  type="text"
                  className="form-control"
                />
              </Col>
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group row">
              <label
                htmlFor="txtEmailAddressShipping"
                className="col-lg-3 col-form-label"
              >
                Service Tax No.
              </label>
              <Col lg={9}>
                <input
                  id="txtEmailAddressShipping"
                  name="txtEmailAddressShipping"
                  type="text"
                  className="form-control"
                />
              </Col>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div className="form-group row">
              <label
                htmlFor="txtCityShipping"
                className="col-lg-3 col-form-label"
              >
                Company UIN
              </label>
              <Col lg={9}>
                <input
                  id="txtCityShipping"
                  name="txtCityShipping"
                  type="text"
                  className="form-control"
                />
              </Col>
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group row">
              <label
                htmlFor="txtStateProvinceShipping"
                className="col-lg-3 col-form-label"
              >
                Declaration
              </label>
              <Col lg={9}>
                <input
                  id="txtStateProvinceShipping"
                  name="txtStateProvinceShipping"
                  type="text"
                  className="form-control"
                />
              </Col>
            </div>
          </Col>
        </Row>
      </fieldset>
      <div id="btn_div" className="float-right">
        <button
          type="button"
          className="btn btn-primary previous"
          onClick={previousPage}
        >
          {" "}
          Previous{" "}
        </button>{" "}
        &nbsp;
        <button type="submit" className="btn btn-primary next">
          {" "}
          Next{" "}
        </button>
      </div>
    </form>
  )
}

WizardFormSecondPage.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
}

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage)
