import React from "react";
import {Row, Col, Tab, Nav} from "react-bootstrap/"
import Order from "../views/order-view.component";
export default class OrderListing extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="processed">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="pending">Pending</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cancelled">Cancelled</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="processed">Processed</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="shipped">Shipped</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {/* <Tab.Pane eventKey="all">
                <Row xs={1} md={2} className="g-4">
                {this.props.order.map((order, index) => (
                  <Col>
                      <Order
                        id={order.poNo}
                        poPrice={order.poPrice}
                        clientCompId={order.clientCompId}
                        date={order.datePO}
                        edit={this.props.agent}
                        status={order.status}
                        option="false"
                      />
                  </Col>
                ))}
              </Row>
              </Tab.Pane> */}
              <Tab.Pane eventKey="pending">
                <Row xs={1} md={2} className="g-4">
                  {this.props.order.map((order, index)=>{
                    if(order.status === 'Pending'){
                      return (<Col>
                        <Order
                          id={order.poNo}
                          poPrice={order.poPrice}
                          clientCompId={order.clientCompId}
                          date={order.datePO}
                          edit={this.props.agent}
                          status={order.status}
                          option="false"
                        />
                      </Col>)
                    }
                  })}
              </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="processed">
                <Row xs={1} md={2} className="g-4">
                  {this.props.order.map((order, index)=>{
                    if(order.status === 'Processed'){
                      return (<Col>
                        <Order
                          id={order.poNo}
                          poPrice={order.poPrice}
                          clientCompId={order.clientCompId}
                          date={order.datePO}
                          edit={this.props.agent}
                          status={order.status}
                        />
                      </Col>)
                    }
                  })}
              </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="cancelled">
                <Row xs={1} md={2} className="g-4">
                  {this.props.order.map((order, index)=>{
                    if(order.status === 'Cancelled'){
                      return (<Col>
                        <Order
                          id={order.poNo}
                          poPrice={order.poPrice}
                          clientCompId={order.clientCompId}
                          date={order.datePO}
                          edit={this.props.agent}
                          status={order.status}
                          option="false"
                        />
                      </Col>)
                    }
                  })}
              </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="shipped">
                <Row xs={1} md={2} className="g-4">
                  {this.props.order.map((order, index)=>{
                    if(order.status === 'Shipped'){
                      return (<Col>
                        <Order
                          id={order.poNo}
                          poPrice={order.poPrice}
                          clientCompId={order.clientCompId}
                          date={order.datePO}
                          edit={this.props.agent}
                          status={order.status}
                        />
                      </Col>)
                    }
                  })}
              </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
