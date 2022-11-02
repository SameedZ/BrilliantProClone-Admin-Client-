import React from "react"
import { Card, CardBody, Row , Col} from "reactstrap"

const Miniwidget = props => {
  return (
    <React.Fragment>
      <Row>
        {props.reports.map((report, key) => (
          <Col xl={3} sm={6} key={key}>
            <Card className="mini-stat bg-primary">
              <CardBody className="card-body mini-stat-img">
                <div className="mini-stat-icon">
                  <i className={"float-end mdi mdi-" + report.iconClass}></i>
                </div>
                <div className="text-white">
                  <h6 className="text-uppercase mb-3 font-size-16 text-white">{report.title}</h6>
                  <h2 className="mb-4 text-white">{report.total}</h2>
                  <span className={"badge bg-" + report.badgecolor}> {report.average} </span> <span className="ms-2">From previous period</span>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  )

}

export default Miniwidget
