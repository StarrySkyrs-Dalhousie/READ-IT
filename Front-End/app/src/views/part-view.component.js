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
                class="card-image-top" 
                //src="https://orly-appstore.herokuapp.com/generate?title=Learn%20Computer%20Science&top_text=Get%20access%20to%20all%20the%20tests%20and%20solutions&author=Adama%20Camara&image_code=40&theme=13&guide_text=Steal%20that%20degree%20boy%20&guide_text_placement=bottom_right"
                 src={props.picture} 
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
        <div style={{marginBottom:'20px', radius:"0px"}} onClick={() => setModalShow(true)} class="card">
            <div style={{}} class="card-body">
                
            {/* <h5 style={{textAlign:"left"}}><span class="badge bg-secondary">$ {this.props.currentPrice}</span></h5> */}
            <img width="200px" 
                class="card-image-top" 
                //src="https://orly-appstore.herokuapp.com/generate?title=Learn%20Computer%20Science&top_text=Get%20access%20to%20all%20the%20tests%20and%20solutions&author=Adama%20Camara&image_code=40&theme=13&guide_text=Steal%20that%20degree%20boy%20&guide_text_placement=bottom_right"
                src={props.picture} 
                alt={props.name}/>
                {/* <p class="card-text">{this.props.description}</p>
                <AddLine user_id={id} id={this.props.id} price={this.props.currentPrice} /> */}
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
