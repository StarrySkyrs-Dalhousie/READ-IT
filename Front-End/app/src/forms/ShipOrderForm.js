import React from "react";
import axios from "axios";

export default class ShippingOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "",
      clientCompId: "",
      poNo: "",
    };
  }
  componentDidMount() {
    this.setState({
      poNo: this.props.poNo,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.poNo);
    axios
      .get(`http://localhost:3000/pos/ship/${this.state.poNo}`, {
        clientCompId: this.props.clientCompId,
      })
      .then(() => window.location.reload(false))
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <a
          href="/orders"
          onClick={this.handleSubmit}
          class="btn btn-dark btn-round"
        >
          SHIP IT
        </a>
        <div class="position-fixed bottom-0 end-0 p-3" style={{ zIndex: "5" }}>
          <div
            id="liveToast"
            class="toast hide"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="toast-header">
              <img src="..." class="rounded me-2" alt="..." />
              <strong class="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div class="toast-body">Hello, world! This is a toast message.</div>
          </div>
        </div>
      </div>
    );
  }
}
