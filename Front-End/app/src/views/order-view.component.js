import React from "react"
import axios from 'axios';
import {Modal, Button, ListGroup} from 'react-bootstrap/'
import ProcessOrderForm from '../forms/ProcessOrderForm';
import CancelOrderForm from "../forms/CancelOrder";
import RemoveLine from "../forms/RemoveLine";
import ShippingOrder from "../forms/ShipOrderForm";
export default class Order extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data : []
        }
    }
    componentDidMount(){
        this.getLine();
    }
    getLine = () => {
        var id = null
        if(this.props.id !== null){
            id = this.props.id;
        }
        axios.get(`http://localhost:3000/lines/${id}`)
        .then((res) => {
            console.log(res.data);
            this.setState({
                data : res.data
            })
        });
    }
    render(){
        return (
            <div style={{padding:"10px",margin:'10px', border: '1px solid black'}}  class="row align-items-start">
                        <div class="col">
                        OrderID: #{this.props.id}
                        <br/>
                        Status: {this.props.status}
                        </div>
                        <div class="col">
                        Price ammount :{this.props.poPrice}
                        </div>
                        <div class="col">
                        {(this.props.status) === 'Pending' && (this.props.option) !=='false' && (this.props.option) !=='false' &&
                            <ProcessOrderForm 
                            clientCompId={this.props.clientCompId} 
                            poNo={this.props.id}
                        />
                        }
                        {(this.props.status) === 'Created' && (this.props.option) !=='false' && (this.props.option) !=='false' &&
                            <ProcessOrderForm 
                            clientCompId={this.props.clientCompId} 
                            poNo={this.props.id}
                        />
                        }
                        {(this.props.status) !== 'Shipped' && 
                             <OrderDetail 
                             id={this.props.id}
                             poNo={this.props.id}
                             line={this.state.data}
                            />
                        }
                    
                        {this.props.edit==='true' && this.props.status !=='Shipped' && (this.props.option) !=='false' &&
                            <ShippingOrder
                                clientCompId={this.props.clientCompId} 
                                poNo={this.props.id}
                            />
                        }
                        {(this.props.status) === 'Cancelled' && (this.props.option) !=='false' &&
                            <ProcessOrderForm 
                            clientCompId={this.props.clientCompId} 
                            poNo={this.props.id}/>
                        }
                        {this.props.edit!='true' && (this.props.status) === 'Shipped' && (this.props.option) !=='false' &&
                            <CancelOrderForm 
                            clientCompId={this.props.clientCompId} 
                            poNo={this.props.id}
                            status={this.props.status}
                        />
                        }
                        {this.props.edit!='true' && (this.props.status) === 'Processed' && (this.props.option) !=='false' &&
                            <CancelOrderForm 
                            clientCompId={this.props.clientCompId} 
                            status={this.props.status}
                            poNo={this.props.id}
                        />
                        }
                        {(this.props.status) === 'Shipped' &&
                            <p>Order incoming</p>
                        }
                        </div>
                        <div class="col">
                            {this.props.date}
                        </div>
            </div>
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
            Order #{props.id} details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
                {props.lines.map(line => (
                    <ListGroup.Item>Part No:{line.partNo} Unit:{line.lineUnit} Price:{line.linePrice} <RemoveLine id={line.lineNo}/></ListGroup.Item>
                ))}
            </ListGroup>
        
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function OrderDetail(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div onClick={() => setModalShow(true)}>
            <Button className="btn-info">EDIT</Button>
        </div>
        
  
        <MyVerticallyCenteredModal
          show={modalShow}
          lines={props.line}
          id={props.id}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
