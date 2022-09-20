import React from "react";
import AddLine from "../forms/AddLine";
import AuthService from "../services/auth.service";
import { Modal, Button } from "react-bootstrap/";
import PriceChange from "../forms/PriceChange";
export default class AgentPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poNo: "default",
      pos: [],
    };
  }
  render() {
    const currentUser = AuthService.fetchCurrentUser();
    var id = null;
    if (currentUser !== null) {
      id = currentUser.id;
    }
    //console.log(this.props.qty)
    return (
      <PartDetails
        price={this.props.currentPrice}
        id={this.props.id}
        key={this.props.id}
        user_id={id}
        qty={this.props.qty}
        picture={this.props.picture}
        name={this.props.partName}
        description={this.props.description}
      />
    );
  }
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          width="200px"
          className="card-image-top"
          src={"welcome/" + props.picture}
          alt="cube"
        />
        <h4>Description</h4>
        <p>{props.description}</p>
        <AddLine user_id={props.user_id} id={props.id} price={props.price} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function PartDetails(props) {

  return (
    <>
      <div
        key={props.id}
        id={props.id}
        style={{ marginBottom: "20px", radius: "0px" }}
        className="card"
      >
        <div>
          <img
            style={{ maxWidth: "300px", minWidth: "270px" }}
            className="card-image-top"
            src={"welcome/" + props.picture}
            alt={props.name}
          />
          <PriceChange partNo={props.id} />
          <br />
          {props.qty < 5 && (
            <span style={{ color: "green" }}>{props.qty} Need to reorder</span>
          )}
          {props.qty > 0 && (
            <span style={{ color: "green" }}>{props.qty} in stock</span>
          )}
          {props.qty < 0 && (
            <span style={{ color: "red" }}>{props.qty} in stock</span>
          )}
        </div>
      </div>
      
    </>
  );
}
