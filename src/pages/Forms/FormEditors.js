import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';

import {
  Form,
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  CardSubtitle
} from "reactstrap"

// Form Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const FormEditors = (props) => {

  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Forms", link: "#" },
    { title: "Form Editors", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Form Editors', breadcrumbItems)
  })

  return (
    <React.Fragment>

      <MetaTags>
        <title>Form Editors | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>react-draft-wysiwyg</CardTitle>
              <CardSubtitle className="mb-3">
                Bootstrap-wysihtml5 is a javascript plugin that makes it
                easy to create simple, beautiful wysiwyg editors with the
                help of wysihtml5 and Twitter Bootstrap.
                  </CardSubtitle>

              <Form method="post">
                <Editor
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(FormEditors);