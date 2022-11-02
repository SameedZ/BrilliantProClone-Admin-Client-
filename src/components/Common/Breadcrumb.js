import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from 'react-redux';
import {Link} from "react-router-dom"
import {
  Sparklines,
  SparklinesBars,
} from "react-sparklines"

const Breadcrumb = props => {

const itemLength = (props.breadcrumbItems || []).length || 1;

  return (
    <Row>
      <Col sm={6}>
        <div className="page-title-box">

          <h4>{props.title}</h4>
          <ol className="breadcrumb m-0">
            {
              (props.breadcrumbItems || []).map((item, key) =>
                (key + 1) === itemLength ?
                  <li key={key} className="breadcrumb-item active">{item.title}</li>
                  : <li key={key} className="breadcrumb-item"><Link to="#">{item.title}</Link></li>
              )
            }
          </ol>
        </div>
      </Col>

    
    </Row>
  )
}

const mapStatetoProps = state => {
  const Layout = state.Layout;
  const BreadcrumbData = state.Breadcrumb
  return { layoutType: Layout.layoutType, title: BreadcrumbData.title, breadcrumbItems: BreadcrumbData.breadcrumbItems };
};

export default connect(mapStatetoProps, {})(Breadcrumb);
