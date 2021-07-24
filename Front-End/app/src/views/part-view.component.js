import React from 'react';
import AddLine from '../forms/AddLine';
import AuthService from "../services/auth.service";
import {Modal, Button} from 'react-bootstrap/'
export default class Part extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          poNo: "default",
          pos: [],
        };
    }
    render(){
        const currentUser = AuthService.fetchCurrentUser();
        var id = null;
        if(currentUser !== null){
            id = currentUser.id;
        }
        return (
            <PartDetails 
                price={this.props.currentPrice} 
                id={this.props.id} 
                key={this.props.id}
                user_id={id}
                picture={this.props.picture} 
                name={this.props.partName} 
                description={this.props.description}/>
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
        <img width="200px" 
                className="card-image-top" 
                 src={'welcome/'+props.picture} 
                alt="cube"/>
          <h4>Description</h4>
          <p>
          {props.description}
          </p>
          <AddLine user_id={props.user_id} id={props.id} price={props.price} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function PartDetails(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div key={props.id} id={props.id} style={{marginBottom:'20px', radius:"0px"}} onClick={() => setModalShow(true)} className="card">
            <div>
            <img 
                style={{maxWidth:'300px', minWidth:'270px'}}
                className="card-image-top" 
                src={'welcome/'+props.picture}
                alt={props.name}/>
            </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          name={props.name}
          price={props.price}
          user_id={props.user_id}
          description={props.description}
          picture={props.picture}
          id={props.id}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
