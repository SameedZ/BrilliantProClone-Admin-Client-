import PropTypes from 'prop-types'
import React from "react"
import { reduxForm } from "redux-form"
import validate from "./validate"

const WizardFormFourPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <h6 className="text-muted">Confirm Detail</h6>
      <fieldset>
        <div className="p-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              I agree with the Terms and Conditions.
            </label>
          </div>
        </div>
      </fieldset>

      <div id="btn_div" className="float-right">
        <button
          type="button"
          className="btn btn-primary previous"
          onClick={previousPage}
        >
          Previous
        </button>
        &nbsp;
        <button type="submit" className="btn btn-primary next">
          Finish
        </button>
      </div>
    </form>
  )
}

WizardFormFourPage.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
}

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFourPage)
