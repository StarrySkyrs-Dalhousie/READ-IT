import React from "react";
import axios from "axios";
import ProcessOrderForm from "../forms/ProcessOrderForm";
import Order from "../views/order-view.component";
import CancelOrderForm from "../forms/CancelOrder";
import { Tab, Sonnet, Row, Col, Nav, Card } from "react-bootstrap/";
import OrderListing from "../components/order-listing.component";
import PartListing from "../components/part-listing.component";
import AgentPartListing from "../components/agent-part-listing.component";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      orders: [],
      parts: [],
      state: "",
    };
  }
  componentDidMount() {
    this.getParts();
    this.getOrders();
    this.getClients();
  }
  getParts = () => {
    axios.get("http://localhost:3000/parts").then((response) => {
      this.setState({ parts: response.data });
      // // console.log(response.data);
    });
  };
  getOrders = () => {
    axios.get(`http://localhost:3000/pos/`).then((response) => {
      this.setState({ orders: response.data });
      // console.log(response.data);
    });
  };
  getClients = () => {
    axios.get(`http://localhost:3000/clients/`).then((response) => {
      this.setState({ clients: response.data });
      console.log(response.data);
    });
  };
  render() {
    const { parts, orders, clients } = this.state;
    return (
      <div
        style={{
          marginTop: "100px",
          width: "100%",
        }}
      >
        <Tab.Container defaultActiveKey="orders">
          <Row>
            <Col
              sm={2}
 
            >
              <Nav
                defaultActiveKey="orders"
                variant="pills"
                className="flex-column"
              >
                <Nav.Item>
                  <Nav.Link eventKey="orders">Purchase orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="inventory">Inventory</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="client">Client</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="orders">
                  <OrderListing agent="true" order={this.state.orders} />
                </Tab.Pane>
                <Tab.Pane eventKey="inventory">
                  <AgentPartListing edit="true" />
                </Tab.Pane>
                <Tab.Pane eventKey="client">
                  <div class="container">
                  <Row xs={3} md={4} className="g-4">
                    {this.state.clients.map((client) => (
                      <Col style={{marginBottom:"10px"}}>
                        <Card style={{padding:'10px'}}>
                          <Card.Body>
                            <Card.Title>Name: {client.clientCompName}</Card.Title>
                            <Card.Text>
                              ID: {client.clientCompId}<br></br>
                              Role: {client.role}<br></br>
                              Balance: {client.moneyOwed}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

