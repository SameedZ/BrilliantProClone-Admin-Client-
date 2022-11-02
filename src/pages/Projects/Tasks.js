import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


import allTasks from './taskdata.json'


const YourProjectsView = ({props}) => {

    console.log("props",props)

    return (
        <Card>
        <CardBody>
          <CardTitle className="h4">Your Projects </CardTitle>
          
          
          
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
                    <Th data-priority="1">Type</Th>
                    <Th data-priority="3">Description</Th>
                    <Th data-priority="1">Priority</Th>
                    <Th data-priority="3">Deadline</Th>
                    <Th data-priority="3">Team Members</Th>

                  </Tr>
                </Thead>
                <Tbody>


                    {props.map((task, index) => {
                        return (
                            <Tr key={index}>
                                <Td>{task.name}</Td>
                                <Td>{task.type}</Td>
                                <Td>{task.description}</Td>
                                <Td>{task.priority}</Td>
                                <Td>{task.deadline}</Td>
                                <Td>{task.teamMembers}</Td>
                            </Tr>
                        )
                    })}
                    

                </Tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    )

}



const ResponsiveTables = (props) => {

  const [tasks, setTasks] = React.useState(allTasks);

  const [name, setName] = React.useState('');

  const [type, setType] = React.useState('');

  const [priority, setPriority] = React.useState('');

  const [description, setDescription] = React.useState('');

  const [teamMembers, setTeamMembers] = React.useState('');

  const [deadline, setDeadline] = React.useState('');

  const [refresh, setRefresh] = React.useState(false);

  //console.log(tasks);

    const handeSubmit = (e) => {
        e.preventDefault();
        console.log("🚀 ~ file: Tasks.js ~ line 23 ~ ResponsiveTables ~ name", name) 
        // create regex for name
        const nameRegex = /^[a-zA-Z]+$/;
        // check if name matches nameRegex
        if(!nameRegex.test(name)) {
            alert("Name must be letters only");
            return;
        }

        // create regex for type
        const typeRegex = /^[a-zA-Z]+$/;
        // check if type matches typeRegex
        if(!typeRegex.test(type)) {
            alert("Type must be letters only");
            return;
        }

        if (description === '') {
            alert("Fill the description");
            return;
        } else if (teamMembers === '') {
            alert("Fill the description");
            return;
        } else if (deadline === '') {
            alert("Select a Deadline");
            return;
        }

        // add new task to tasks array
        const newTask = {
            name: name,
            type: type,
            priority: priority,
            description: description,
            teamMembers: teamMembers,
            deadline: deadline

        }
        var updatedTasks = tasks;
        // append newTask to oldTasks
        updatedTasks.push(newTask);
        
        setTasks(updatedTasks);
        setRefresh(true);
        // reset form



    }


  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Projects", link: "#" },

  ]

  useEffect(() => {
    props.setBreadcrumbItems('Projects', breadcrumbItems)
  })


  return (
    <React.Fragment>

      <MetaTags>
        <title>Projects | HiTask</title>
      </MetaTags>


      <Row>
        <Col>
          <Card>
              <CardBody>
                <CardTitle>
                    <h5 className="font-size-15">Add New Project</h5>
                </CardTitle>

                <Row className="mb-3">

                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Project Name
                </label>
                
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    placeholder=" Daraz Pk Clone"
                  />
                </div>
                

                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Type
                </label>
                
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Software Engineering"
                    onChange={(event) => setType(event.target.value)}
                  />
                </div>
               


              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                 Priority
                </label>
                
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="High"
                    onChange={(event) => setPriority(event.target.value)}
                  />
                </div>
                
                <label
                  htmlFor="example-date-input"
                  className="col-md-1 col-form-label"
                >
                  Deadline
                    </label>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="date"
                    defaultValue="2019-08-19"
                    id="example-date-input"
                    onChange={(event) => setDeadline(event.target.value)}
                  />
                </div>
            


              </Row> 


              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Description 
                </label>
                
                <div className="col-md-9">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue=""
                    placeholder="Type your text here...."
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
                
               


              </Row> 

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Team Members
                </label>
                
                <div className="col-md-9">
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
                tasks ?  <YourProjectsView props ={tasks}/> : null
            }
           


        </Col>
      </Row>

    </React.Fragment>
  )
}
export default connect(null, { setBreadcrumbItems })(ResponsiveTables);