import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"

const Navbar = props => {
  const [ui, setui] = useState(false)
  const [enrollment, setenrollment] = useState(false)
  const [email, setemail] = useState(false)
  const [course, setcourse] = useState(false)
  const [form, setform] = useState(false)
  const [table, settable] = useState(false)
  const [chart, setchart] = useState(false)
  const [icon, seticon] = useState(false)
  const [map, setmap] = useState(false)
  const [extra, setextra] = useState(false)
  const [moreItem, setMoreItem] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  });

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="topnav">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <i className="mdi mdi-home">
                    </i>{props.t("Dashboard")}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setemail(!email)
                    }}
                  >
                    <i className="mdi mdi-account-group-outline"></i>{props.t("Learner")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: email })}
                  >
                    <Link to="/addlearner" className="dropdown-item">
                      {props.t("Add Learner")}
                    </Link>
                    <Link to="/updatelearner" className="dropdown-item">
                      {props.t("Update Learner")}
                    </Link>
                    <Link to="/viewlearner" className="dropdown-item">
                      {props.t("View Learner")}
                    </Link>
                    <Link to="/removelearner" className="dropdown-item">
                      {props.t("Remove Learner")}
                    </Link>
                  </div>
                </li>  

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setemail(!course)
                    }}
                  >
                    <i className="mdi mdi-book-education-outline"></i>{props.t("Courses")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: course })}
                  >
                    <Link to="/addcourse" className="dropdown-item">
                      {props.t("Add Course")}
                    </Link>
                    <Link to="/updatecourse" className="dropdown-item">
                      {props.t("Update Course Information")}
                    </Link>
                    <Link to="/searchcourse" className="dropdown-item">
                      {props.t("Search Course")}
                    </Link>
                    <Link to="/coursecatalog" className="dropdown-item">
                      {props.t("Courses Catalog")}
                    </Link>
                    <Link to="/removecourse" className="dropdown-item">
                      {props.t("Remove Course")}
                    </Link>
                  </div>
                </li>             

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setemail(!enrollment)
                    }}
                  >
                    <i className="mdi mdi-book-education-outline"></i>{props.t("Enrollments")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: enrollment })}
                  >
                    <Link to="/enrollearner" className="dropdown-item">
                      {props.t("Enroll Learner")}
                    </Link>
                    <Link to="/removenrollment" className="dropdown-item">
                      {props.t("Unenroll Learner")}
                    </Link>
                    <Link to="/viewallenrollments" className="dropdown-item">
                      {props.t("View all Enrollments")}
                    </Link>
                    <Link to="/removecourse" className="dropdown-item">
                      {props.t("View Enrollments in Course")}
                    </Link>
                  </div>
                </li>  


                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setemail(!email)
                    }}
                  >
                    <i className="mdi mdi-file-document-multiple-outline"></i>{props.t("Materials")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: email })}
                  >
                    <Link to="/addmaterial" className="dropdown-item">
                      {props.t("Upload Material")}
                    </Link>
                    <Link to="/updatelearner" className="dropdown-item">
                      {props.t("View Material")}
                    </Link>
                  </div>
                </li>  

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setemail(!email)
                    }}
                  >
                    <i className="mdi mdi-clipboard-check-outline"></i>{props.t("Assessments")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: email })}
                  >
                    <Link to="/uploadassessment" className="dropdown-item">
                      {props.t("Upload Assessments")}
                    </Link>
                    <Link to="/updatelearner" className="dropdown-item">
                      {props.t("Search Assessments")}
                    </Link>

                  </div>
                </li>  

                {/* <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    <i className="ti-folder">
                    </i>{props.t("Learner")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/teams">
                    <i className="mdi mdi-book-check-outline">
                    </i>{props.t("Courses")}
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link className="nav-link" to="/mytasks">
                    <i className="mdi mdi-format-list-bulleted">
                    </i>{props.t("Settings")}
                  </Link>
                </li>


{/* 
                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setform(!form)
                    }}
                  >
                    <i className="ti-receipt"></i> {props.t("Forms")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: form })}
                  >
                    <Link to="form-elements" className="dropdown-item">
                      {props.t("Form Elements")}
                    </Link>
                    <Link to="form-validation" className="dropdown-item">
                      {props.t("Form Validation")}
                    </Link>
                    <Link to="form-advanced" className="dropdown-item">
                      {props.t("Form Advanced")}
                    </Link>
                    <Link to="form-editors" className="dropdown-item">
                      {props.t("Form Editors")}
                    </Link>
                    <Link to="form-uploads" className="dropdown-item">
                      {props.t("Form File Upload")}{" "}
                    </Link>
                    <Link to="form-xeditable" className="dropdown-item">
                      {props.t("Form Xeditable")}
                    </Link>
                  </div>
                </li>
           


                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setMoreItem(!moreItem)
                    }}
                  >
                    <i className="ti-menu-alt"></i>More
                  </Link>
                  <div className={classname("dropdown-menu dropdown-menu-left", { show: moreItem })}>
                    <Link to="/calendar" className="dropdown-item">{props.t("Calendar")}</Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          seticon(!icon)
                        }}
                      >
                        {props.t("Icons")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: icon })}
                      >

                        <Link to="/icons-materialdesign" className="dropdown-item">
                          {props.t("Material Design")}
                        </Link>

                        <Link to="/icons-ion" className="dropdown-item">{props.t("Ion Icons")}</Link>

                        <Link to="/icons-fontawesome" className="dropdown-item">{props.t("Font Awesome")}</Link>

                        <Link to="/icons-themify" className="dropdown-item">{props.t("Themify Icons")}</Link>

                        <Link to="/icons-dripicons" className="dropdown-item">{props.t("Dripicons")}</Link>

                        <Link to="/icons-typicons" className="dropdown-item">{props.t("Typicons Icons")}</Link>

                      </div>
                    </div>
                    </div>
                </li> */}










               </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)
