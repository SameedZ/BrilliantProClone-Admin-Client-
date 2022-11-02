import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


import allTasks from '../MyTasks/mytasks.json'


const YourTeamsView = ({props}) => {

    console.log("props =->",props)

    return (
        <Card>
        <CardBody>
          <CardTitle className="h4">Your Tasks </CardTitle>
          
          
          
          <p className="card-title-desc">
            
          </p>

          <div className="table-rep-plugin">
            <div
              className="table-responsive mb-0"
              data-pattern="priority-columns"
            >
              <Table
                id="tech-companies-1"
                className="table table-striped table-bordered"
              >
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th data-priority="1">Priority</Th>
                    <Th data-priority="1">Deadline</Th>
                    <Th data-priority="1">Time Spend</Th>
                    <Th data-priority="1">Status</Th>
                    <Th data-priority="3">Team Members</Th>

                  </Tr>
                </Thead>
                <Tbody>

                {
                  props? props.map((task, index) => {
                        return (
                            <Tr key={index}>
                                <Td>{task.name}</Td>
                                <Td>{task.priority}</Td>
                                <Td>{task.deadline}</Td>
                                <Td>{task.timeSpent}</Td>
                                <Td>{task.status}</Td>
                                <Td>{task.teamMembers}</Td>

                            </Tr>
                        )
                    }):null
                }
                   
                    

                </Tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    )

}



const ResponsiveTables = (props) => {

 // const [teams, setTeams] = React.useState(allTeams);
  const [tasks, setTasks] = React.useState(allTasks);

    


  return (
    <React.Fragment>

      <Row>
        <Col>
   
            {
                tasks? <YourTeamsView props={tasks}/>:null
            }

    
        </Col>
      </Row>

    </React.Fragment>
  )
}
export default connect(null, { setBreadcrumbItems })(ResponsiveTables);