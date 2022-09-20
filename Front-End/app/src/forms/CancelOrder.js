import React from 'react';
import axios from 'axios';

export default class CancelOrderForm extends React.Component{
    constructor(){
        super();
        this.state={
            status : '',
            clientCompId:'',
            poNo:''
        }
    }
    componentDidMount(){
        this.setState({
            poNo: this.props.poNo
        })
    }
    handleSubmit= e => {
        e.preventDefault();
        console.log(this.state.poNo)
        axios
        .get(`http://localhost:3000/pos/cancel/${this.state.poNo}`)
        .then(() => window.location.reload(false))
        .then(() => console.log('Order processed'))
        .catch(err => {
          console.error(err);
        });
    }
    
      render(){
          return(
              <div>
                  {this.props.status === 'Shipped' && <a href="/orders" onClick={this.handleSubmit} class="btn btn-warning btn-round">Cancel ($5 fees)</a>}
                  {this.props.status === 'Created' && <a href="/orders" onClick={this.handleSubmit} class="btn btn-warning btn-round">Cancel (No fees)</a>}
                  {this.props.status === 'Pending' && <a href="/orders" onClick={this.handleSubmit} class="btn btn-warning btn-round">Cancel (No fees)</a>}
                  {this.props.status === 'Processed' && <a href="/orders" onClick={this.handleSubmit} class="btn btn-warning btn-round">Cancel (No fees)</a>}
              </div>
                 
          );
      }
}