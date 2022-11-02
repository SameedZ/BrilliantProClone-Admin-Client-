import React , {useEffect,useState} from "react";
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux";
import {
  Row,
  Col,
} from "reactstrap"

// Pages Components

import Miniwidget from "./Miniwidget";
import latestasks from "./latestasks";
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import Latestasks from "./latestasks";

const serverurl = "http://localhost:5000/";





const Dashboard = (props) => {

  function getTotalCoursesCount(){
  
    const url  = serverurl+"courses/getcount"
    fetch(url, {
      method: "GET",
  
      // Adding headers to the request
      headers: {
        Accept: "application/json; charset=UTF-8",
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((result) => {
  
      if (result.status === 200) {
        result.json().then((data) => {
          console.log(data);
          setCoursesCount(data);
        })
      } else {
        console.log("Error");
        return 0;
      }
  
  
        //console.log(resp);
      });
  
  
  }

  function getTotalLearnersCount(){
 
    const url  = serverurl+"learners/getcount"
    fetch(url, {
      method: "GET",
  
      // Adding headers to the request
      headers: {
        Accept: "application/json; charset=UTF-8",
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((result) => {
  
      if (result.status === 200) {
        result.json().then((data) => {
          console.log(data);
          setLearnersCount(data);
        })
      } else {
        console.log("Error");
        return 0;
      }
  
  
        //console.log(resp);
      });


  }

  function getTotalMaterialCount(){
    // http://localhost:5000/materials/getcount
    const url  = serverurl+"materials/getcount"
    fetch(url, {
      method: "GET",
  
      // Adding headers to the request
      headers: {
        Accept: "application/json; charset=UTF-8",
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((result) => {
  
      if (result.status === 200) {
        result.json().then((data) => {
          console.log(data);
         setMaterialsCount(data);
        })
      } else {
        console.log("Error");
        return 0;
      }
  
  
        //console.log(resp);
      });    

  }

  
  const [coursescount, setCoursesCount] = useState(0);
  const [learnerscount, setLearnersCount] = useState(0);
  const [materialscount, setMaterialsCount] = useState(0);

  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Dashboard Admin", link: "#" }
  ]

  getTotalCoursesCount();
  getTotalLearnersCount();
  getTotalMaterialCount();
  //http://localhost:5000/materials/getcount

  useEffect(() => {
    props.setBreadcrumbItems('Dashboard' , breadcrumbItems)
  },)

  const reports = [
    { title: "Courses", iconClass: "cube-outline", total: coursescount , average: "+11%", badgecolor: "info" },
    { title: "Total Learners", iconClass: "buffer", total: learnerscount, average: "+29%", badgecolor: "info" },
    { title: "Materials", iconClass: "tag-text-outline", total: materialscount, average: "90%", badgecolor: "warning" },
    { title: "Certificates Issued", iconClass: "briefcase-check", total: "0", average: "+89%", badgecolor: "info" },
  ]

  return (
    <React.Fragment>

      <MetaTags>
        <title>Dashboard | BrilliantPro</title>
      </MetaTags>

      <Miniwidget reports={reports}/>
      


      <Row>
        {/* <Col xl="6">
         
          <LatestTransactions />
        </Col> */}


          {/* <Latestasks /> */}
          
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Dashboard);