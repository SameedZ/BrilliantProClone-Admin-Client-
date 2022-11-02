import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


import allTasks from './mytasks.json'


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

  const [name, setName] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [timeSpent, setTimeSpent] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [teamMembers, setTeamMembers] = React.useState('');

  const [refresh, setRefresh] = React.useState(false);


  //console.log(tasks);

    const handeSubmit = (e) => {
        e.preventDefault();

        // create regex for name
        const nameRegex = new RegExp(/^[a-zA-Z]+$/);
        // check if name matches nameRegex
        if(!nameRegex.test(name)) {
          alert("Name should be in alphabets only");  
          return;
        }
        
        if (priority === '') {
          alert("Priority should not be empty");
          return;
        }

        if (deadline === '') {
          alert("Deadline should not be empty");
          return;
        }

        if (teamMembers === '') {
          alert("Team Members should not be empty");
          return;
        }



        // add new task to tasks array
        const newTask = {
            name: name,
            status: "In Progress",
            timeSpent: "0 Days",
            deadline:deadline,
            teamMembers: teamMembers,
            priority: priority,
        }
        var updatedTasks = tasks;
        // append newTask to oldTasks
        updatedTasks.push(newTask);
        
        setTasks(updatedTasks);
        setRefresh(true);
        // reset form



    }


  const breadcrumbItems = [
    { title: "HiTask", link: "#" },
    { title: "Tasks", link: "#" },

  ]

  useEffect(() => {
    props.setBreadcrumbItems('My Tasks', breadcrumbItems)
  })


  return (
    <React.Fragment>

      <MetaTags>
        <title>My Tasks | HiTask</title>
      </MetaTags>


      <Row>
        <Col>
          <Card>
              <CardBody>
                <CardTitle>
                    <h5 className="font-size-15">Add New Task</h5>
                </CardTitle>

                <Row className="mb-3">

                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                  Name
                </label>
                
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Graphics Design"
                  />
                </div>

 

                </Row>


                <Row className="mb-3">

                
                <label
                  htmlFor="example-date-input"
                  className="col-md-2 col-form-label"
                >
                  Deadline
                    </label>
                <div className="col-md-2">
                  <input
                    className="form-control"
                    type="date"
                    defaultValue="2019-08-19"
                    id="example-date-input"
                    onChange={(event) => setDeadline(event.target.value)}
                  />
                </div>
            
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                 Priority
                </label>
                
                <div className="col-md-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="High"
                    onChange={(event) => setPriority(event.target.value)}
                  />
                </div>

              </Row> 


              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                  Team Members
                </label>
                
                <div className="col-md-6">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue=""
                    placeholder="Sameed, John, Hassan"
                    onChange={(event) => setTeamMembers(event.target.value)}
                  />
                </div>
                
               


              </Row> 
    
           
              <div className="mt-4">
                <button onClick={handeSubmit} type="submit" className="btn btn-primary w-md">Submit</button>
              </div>

     


                </CardBody>
          </Card>  

            {
                tasks? <YourTeamsView props={tasks}/>:null
            }

            


        </Col>
      </Row>

    </React.Fragment>
  )
}
export default connect(null, { setBreadcrumbItems })(ResponsiveTables);