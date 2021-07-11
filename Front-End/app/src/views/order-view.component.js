import React from "react"
import axios from 'axios';

import ProcessOrderForm from '../forms/ProcessOrderForm';
import CancelOrderForm from "../forms/CancelOrder";
export default class Order extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data : []
        }
    }
    componentDidMount(){
        this.getLine();
       // setInterval(this.getPOS, 5000); 
    }
    getLine = () => {
        var id = null
        if(this.props.id !== null){
            id = this.props.id;
        }
        axios.get(`http://localhost:3000/lines/${id}`)
        .then((res) => {
            //console.log(res.data);
            this.setState({
                data : res.data
            })
        });
    }
    render(){
        return (
            <div style={{padding:"10px",margin:'10px', border: '1px solid black', boxShadow:'-5px -5px'}} class="row align-items-start">
    
                        <div class="col">
                        Order#{this.props.id}
                        </div>
                        <div class="col">
                        Price ammount :{this.props.poPrice}
                        </div>
                 
                        
                        <div class="col">
                            <a href={`/orders/${this.props.id}`} class="btn btn-light btn-round">Details</a>
                        </div>
              
                        <div class="col">
                        {(this.props.status) === 'Pending' &&
                            <ProcessOrderForm 
                            clientCompId={this.props.clientCompId} 
                            poNo={this.props.id}
                        />
                        }
                        {(this.props.status) === 'Created' &&
                            <ProcessOrderForm 
                            clientCompId={this.props.clientCompId} 
                            poNo={this.props.id}
                        />
                        }
                        {(this.props.status) === 'Cancelled' &&
                            <ProcessOrderForm 
                            clientCompId={this.props.clientCompId} 
                            poNo={this.props.id}/>
                        }
                        {(this.props.status) === 'Processed' &&
                            <CancelOrderForm 
                            clientCompId={this.props.clientCompId} 
                            poNo={this.props.id}
                        />
                        }
                        </div>
                        <div class="col">
                            {this.props.date}
                        </div>
            </div>
        );
    }
}