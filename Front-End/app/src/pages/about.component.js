import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "./style.css";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      orders: [],
      parts: [],
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div
        class="container"
        style={{
          marginTop: "100px",
          minWidth: "100%",
        }}
      >
        {/*  */}
        <div class="jumbotron">
          <h1 class="display-3">READ📚IT</h1>
          <p class="lead"></p>
          <p>You one-stop-shop for all your reads!</p>
        </div>

        {/* ABOUT US */}

        <div
          class="row"
          style={{ borderBottom: "1px solid lightgrey", margin: "80px" }}
        >
          <div class="col-md-12">
            <h3>About Us</h3>
            <p>
              We are an online library where users can order book right at the
              comfort of their homes.
            </p>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div
          class="row"
          style={{
            borderBottom: "1px solid lightgrey",
            margin: "80px",
            padding: "10px",
          }}
        >
          <div class="col-md-12">
            <h3>Frequently Asked Questions</h3>
            <ReactBootstrap.Accordion defaultActiveKey="0">
              <ReactBootstrap.Card>
                <ReactBootstrap.Accordion.Toggle
                  as={ReactBootstrap.Card.Header}
                  eventKey="0"
                >
                  How much is the shipping fee?
                </ReactBootstrap.Accordion.Toggle>
                <ReactBootstrap.Accordion.Collapse eventKey="0">
                  <ReactBootstrap.Card.Body>
                    The shipping fee depends on your location. Click here to see
                    your estimate shipping fee.
                  </ReactBootstrap.Card.Body>
                </ReactBootstrap.Accordion.Collapse>
              </ReactBootstrap.Card>
              <ReactBootstrap.Card>
                <ReactBootstrap.Accordion.Toggle
                  as={ReactBootstrap.Card.Header}
                  eventKey="1"
                >
                  When will my order arrive?
                </ReactBootstrap.Accordion.Toggle>
                <ReactBootstrap.Accordion.Collapse eventKey="1">
                  <ReactBootstrap.Card.Body>
                    Apologies for the inconvenience. Due to various lockdowns
                    globally, we cannot ensure when your orders are going to
                    arrive. Estimated date of arrivals change accordingly.
                  </ReactBootstrap.Card.Body>
                </ReactBootstrap.Accordion.Collapse>
              </ReactBootstrap.Card>
            </ReactBootstrap.Accordion>
          </div>
        </div>
      </div>
    );
  }
}
