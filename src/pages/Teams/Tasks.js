import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


import allTeams from './teams.json'


const YourTeamsView = ({props}) => {

    console.log("props =->",props)

    return (
        <Card>
        <CardBody>
          <CardTitle className="h4">Your Teams </CardTitle>
          
          
          
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
                    <Th data-priority="1">Team Members</Th>
                    <Th data-priority="3">Project Assigned</Th>

                  </Tr>
                </Thead>
                <Tbody>

                {
                  props? props.map((task, index) => {
                        return (
                            <Tr key={index}>
                                <Td>{task.name}</Td>
                                <Td>{task.teamMembers}</Td>
                                <Td>{task.Projects}</Td>
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

  const [teams, setTeams] = React.useState(allTeams);
 // const [tasks, setTasks] = React.useState(allTeams);

  const [name, setName] = React.useState('');

  const [project, setProject] = React.useState('');

  const [teamMembers, setTeamMembers] = React.useState('');

  const [refresh, setRefresh] = React.useState(false);


  //console.log(tasks);

    const handeSubmit = (e) => {
        e.preventDefault();

        // create regex for name
        const nameRegex = /^[a-zA-Z]+$/;
        // check if name matches nameRegex
        if(!nameRegex.test(name)) {
            alert("Name must be letters only");
            return;
        }
        
        const projectRegex = /^[a-zA-Z0-9]+$/;
        // check if project matches projectRegex
        if(!projectRegex.test(project)) {
            alert("Project must be letters and numbers only");
            return;
        }

       if (teamMembers === '') {
            alert("Fill the description");
            return;
        } 

        // add new task to tasks array
        const newTeam = {
            name: name,
            teamMembers: teamMembers,
            Projects: project,
        }
        var updatedTeams = teams;
        // append newTask to oldTasks
        updatedTeams.push(newTeam);
        
        setTeams(updatedTeams);
        setRefresh(true);
        // reset form



    }


  const breadcrumbItems = [
    { title: "HiTask", link: "#" },
    { title: "Teams", link: "#" },

  ]

  useEffect(() => {
    props.setBreadcrumbItems('Projects', breadcrumbItems)
  })


  return (
    <React.Fragment>

      <MetaTags>
        <title>Teams | HiTask</title>
      </MetaTags>


      <Row>
        <Col>
          <Card>
              <CardBody>
                <CardTitle>
                    <h5 className="font-size-15">Add New Team</h5>
                </CardTitle>

                <Row className="mb-3">

                <label
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                  Team Name
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
                  htmlFor="example-text-input"
                  className="col-md-2 col-form-label"
                >
                  Project Assigned
                </label>
                
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Granna RealEstate"
                    onChange={(event) => setProject(event.target.value)}
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
                teams? <YourTeamsView props={teams}/>:null
            }

            


        </Col>
      </Row>

    </React.Fragment>
  )
}
export default connect(null, { setBreadcrumbItems })(ResponsiveTables);