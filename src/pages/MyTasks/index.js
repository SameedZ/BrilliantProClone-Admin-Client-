import React , {useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux";
import {
  Row,
  Col,
} from "reactstrap"

// Pages Components
import Tasks from "./Tasks";


//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const Dashboard = (props) => {

  const breadcrumbItems = [
    { title: "HiTask", link: "#" },
    { title: "My Tasks", link: "#" }
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Dashboard' , breadcrumbItems)
  },)

  

  return (
    <React.Fragment>

      <MetaTags>
        <title>My Tasks | HiTask</title>
      </MetaTags>


      <Row>
        <Tasks />     
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Dashboard);