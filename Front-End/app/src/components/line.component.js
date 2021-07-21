import React from 'react'
import axios from 'axios'

export default class Line extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data : []
        }
    }
    componentDidMount(){
        this.getPart();
    }
    getPart = () => {
        axios.get(`http://localhost:3000/parts/${this.props.id}`)
        .then((res) => {
            console.log(res.data);
            this.setState({
                data : res.data
            })
        });
    }
    render(){
        console.log(this.props.unit)
        return(
            <ul class="list-group">
                {this.state.data.map((part)=>(
                     <li style={{background:'transparent', marginBottom:'10px', border:'none'}} class="list-group-item d-flex justify-content-between align-items-center">
                     {part.partName}
                     <div class="text-end">
                        <span  style={{color:'black'}}  class="badge bg-light rounded-pill">Ordering {this.props.unit}</span>
                        <span style={{marginLeft:'10px', color:'black'}} class="badge bg-light rounded-pill">In store {part.part_QOH}</span>
                     </div>
                  
                 </li>
                ))}
             </ul>
        );
    }
}