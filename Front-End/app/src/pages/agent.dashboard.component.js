import React from "react";
import axios from "axios";
import "./style.css";
import ProcessOrderForm from "../forms/ProcessOrderForm";
import Order from "../views/order-view.component";
import CancelOrderForm from "../forms/CancelOrder";

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
  }
  getParts = () => {
    axios.get("http://localhost:3000/parts").then((response) => {
      this.setState({ parts: response.data });
      console.log(response.data);
    });
  };
  getOrders = () => {
    axios.get(`http://localhost:3000/pos/`).then((response) => {
      this.setState({ orders: response.data });
      console.log(response.data);
    });
  };
  render() {
    const { parts, orders } = this.state;
    return (
      <div
        style={{
          marginTop: "100px",
          width: "100%",
        }}
      >
        <h1> Dashboard</h1>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              {/* tables */}
              <div class="row">
                {/* Order column */}
                <div class="col-md-6 table-responsive">
                  <h4>
                    <strong>Client Orders</strong>
                  </h4>
                  <table class="table table-striped table-hover table-bordered table-sm">
                    <thead>
                      <tr>
                        <th>Order Number</th>
                        <th>Company Name</th>
                        <th>Order Date</th>
                        <th>Total Amount Owing</th>
                        <th>Order Status</th>
                        <th>Order Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => {
                        return (
                          <tr>
                            <td>{order.poNo}</td>
                            <td>{order.clientCompId}</td>
                            <td>{order.datePO}</td>
                            <td>{order.poPrice}</td>
                            <td>{order.status}</td>
                            <td>
                              <ProcessOrderForm
                                poNo={order.poNo}
                                clientCompId={order.clientCompId}
                              />
                              <CancelOrderForm
                                poNo={order.poNo}
                                clientCompId={order.clientCompId}
                              />
                            </td>
                          </tr>
                        );
                      })}
                      {this.props.status === "Cancelled" && (
                        <ProcessOrderForm
                          clientCompId={this.props.clientCompId}
                          poNo={this.props.id}
                        />
                      )}
                      {this.props.status === "Processed" && (
                        <CancelOrderForm
                          clientCompId={this.props.clientCompId}
                          poNo={this.props.id}
                        />
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Product Inventory column*/}
                <div class="col-md-6">
                  <h4>
                    <strong>Product Inventory</strong>
                  </h4>
                  <table class="table table-striped table-hover table-bordered table-sm">
                    <thead>
                      <tr>
                        <th>Part Number</th>
                        <th>Part Name</th>
                        <th>Part Description</th>
                        <th>Price</th>
                        <th>Quantity On Hand</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* PARTS TABLE */}
                      {parts.map((part) => {
                        return (
                          <tr>
                            <td>{part.partNo}</td>
                            <td>
                              {part.partName} {part.partPicture}
                            </td>
                            <td>{part.partDescription}</td>
                            <td>{part.currentPrice}</td>
                            <td>{part.part_QOH}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
