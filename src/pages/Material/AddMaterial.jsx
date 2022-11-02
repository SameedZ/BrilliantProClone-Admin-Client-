import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import SweetAlert from "react-bootstrap-sweetalert";
import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"
import axios from "axios"


const AddMaterial = props => {
 

  const [courseid, setCourseid] = useState(0)
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")
  const [title, setTitle] = useState("")




  const [res_server,SetRes_server]= useState(false);
  const [server_err,setServer_err] = useState(false);

  //console.log(tasks);

      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
 
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };


      const uploadFile = async () => {
        const formData = new FormData();
        
        formData.append("materialcontent", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("type", type);

        

        formData.append("fileName", fileName);

        const url = serverurl + "materials/addcoursematerial/"+courseid;
        try {
          const res = await axios.post(
            url,
            formData
          );
          if (res.status === 200) {
              SetRes_server(true);
            } else {
              setServer_err(true);
          }
              

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };

  
      const serverurl = "http://localhost:5000/";




   function makeRequest () {

    uploadFile();

   }



  const handeSubmit = e => {
    e.preventDefault()
    
    // create regex for mongoose id
    const regex = /^[0-9a-fA-F]{24}$/
    // check if id is valid
    if (!regex.test(courseid)) {
      alert("Invalid ID")
      return
    } 
    
    if (description === "") {
      alert("Description is required")
      return
    }
    if (type === "" )  { 
      console.log("🚀 ~ file: AddMaterial.jsx ~ line 101 ~ type", type)
      alert("Type is required and must be one of the following: video, pdf, image, text, ppt")
      return
    }


    uploadFile();
    //makeRequest()

    //setRefresh(true)
    // reset form
  }

  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Upload Material", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Material", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>Upload Material | BrilliantPro</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h5 className="font-size-15">Add New Course Material</h5>
              </CardTitle>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Course Id
                </label>

                <div className="col-md-4">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setCourseid(e.target.value)}
                    placeholder="629907b0a602e220f33ce4c6"
                  />
                </div>
              </Row>

              
              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Title
                </label>

                <div className="col-md-4">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Lecture 1"
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

                <div className="col-md-4">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Brief introduction of the applications"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Type 
                </label>

                <div className="col-md-2">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setType(e.target.value)}
                    placeholder="img / video / ppt / other"
                  />
                </div>
              </Row>




              <form action="#">
                <div className="mb-4 col-md-5">
                  <label className="form-lable">Material File </label>
                  <input onChange={saveFile} type="file" className="form-control form-control-file" data-buttonname="btn-secondary" />
                </div>
                </form>

              <div className="mt-4">
                <button
                  onClick={handeSubmit}
                  type="submit"
                  className="btn btn-primary w-md"
                >
                  Submit
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {res_server? <SweetAlert
                      title="Course Material has been Added."
                      timeout={2000}
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                      }}
                      showCloseButton={false}
                      showConfirm={false}
                      success
                      onConfirm={() => {
                        SetRes_server(false)
                      }}
                    ></SweetAlert>:null}

                    { server_err ? <SweetAlert
                      title="Error"
                      warning
                      onConfirm={() => {
                        setServer_err(false)
                      }}
                    >
                      Oops Something went wrong processing your request. Try again.
                    </SweetAlert>:null} 


    </React.Fragment>
  )
}
export default connect(null, { setBreadcrumbItems })(AddMaterial)
