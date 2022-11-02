import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import SweetAlert from "react-bootstrap-sweetalert";
import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"
import axios from "axios"


const AddCourse = props => {
 

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [subcategory, setSubcategory] = useState("")
  const [tags, setTags] = useState("")



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
        
        formData.append("image", file);
        formData.append("title", title);
        formData.append("author", author);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("subcategory", subcategory);
        formData.append("price", price);
        formData.append("tags", tags);
        formData.append("fileName", fileName);

        const url = serverurl + "courses/add";
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

    const url = serverurl + "courses/add";

    const formData = new FormData();
    formData.append("image",image[0]);
    console.log("🚀 ~ file: AddCourse.jsx ~ line 39 ~ makeRequest ~ formData", formData)
     
    // create a fetch post to send a imagefile to express server

    uploadFile();



    // fetch(url, {
    //     method: "POST",
    //     // Adding body or contents to send
    //     body: ({
    //         title:title,
    //         author: author,
    //         price: price,
    //         description: description,
    //         image: formData,
    //         category: category,
    //         subcategory: subcategory,
    //         tags: tags
            

    //     }),
    //     // Adding headers to the request
    //     // headers: {
    //     //   // multipart/form-data; boundary=<calculated when request is sent>
    //     //  // Accept: "application/json; charset=UTF-8",
    //     //   //"Content-type": "application/json; charset=UTF-8",
    //     // },
    //   }).then((result) => {

    //     if (result.status === 200) {

    //     result.json().then((resp) => {

          
           
    //         SetRes_server(true)
    //         //setRefresh(true)
     

    //     })
          
    //     }
    //       else {
            
    //         setServer_err(true)
    //       }
    
    //       //console.log(resp);
    //     }).catch((err)=>{
    //     console.log(err);
    //   }); 


   }



  const handeSubmit = e => {
    e.preventDefault()
    
    console.log("Image=",image);
    makeRequest()

    //setRefresh(true)
    // reset form
  }

  const breadcrumbItems = [
    { title: "BrilliantPro", link: "#" },
    { title: "Add Course", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Courses", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>Add Course | BrilliantPro</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h5 className="font-size-15">Add New Course</h5>
              </CardTitle>

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
                    placeholder="Software design and analysis"
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Author
                </label>

                <div className="col-md-4">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setAuthor(e.target.value)}
                    placeholder="Dr Zohaib Iqbal"
                  />
                </div>
              </Row>

              <Row className="mb-3">
              <label
                  htmlFor="example-number-input"
                  className="col-md-1 col-form-label"
                >
                  Price
                </label>
                <div className="col-md-2">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="2000"
                    onChange={e => setPrice(e.target.value)}
                    id="example-number-input"
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

                <div className="col-md-7">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Learn basics about React UI library...."
                  />
                </div>
              </Row>

              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Category
                </label>

                <div className="col-md-3">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setCategory(e.target.value)}
                    placeholder="Web Development"
                  />
                </div>

                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                  Subcategory
                </label>

                <div className="col-md-3">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setSubcategory(e.target.value)}
                    placeholder="React Js"
                  />
                </div>
              </Row>


              <Row className="mb-3">
                <label
                  htmlFor="example-text-input"
                  className="col-md-1 col-form-label"
                >
                 Tags
                </label>

                <div className="col-md-7">
                  <input
                    rows="4"
                    className="form-control"
                    type="text"
                    onChange={e => setTags(e.target.value)}
                    placeholder="React,Js,UI"
                  />
                </div>
              </Row>

              <form action="#">
                <div className="mb-4 col-md-5">
                  <label className="form-lable">Course Thumbnail</label>
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
                      title="Course has been Added."
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
export default connect(null, { setBreadcrumbItems })(AddCourse)
