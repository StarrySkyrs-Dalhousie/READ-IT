import React from 'react';
import axios from 'axios';
import ProcessOrderForm from '../forms/ProcessOrderForm';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            orders: [],
            parts: []
        };
    }
    componentDidMount() {
        this.getParts();
    }
      getParts=()=>{
        axios.get('http://localhost:3000/parts')
        .then((response)=>{
          this.setState({parts: response.data});
          console.log(response.data)
        })
      }
    render(){
        const {parts} = this.state;
        return(
            <div>
                {parts.map((part)=>{
                    return (<p>{part.partName}</p>)
                })}
                <ProcessOrderForm/>
                <p>Agent dashboard</p>
                <button>Go to</button>
            </div>
        );
    }
}
