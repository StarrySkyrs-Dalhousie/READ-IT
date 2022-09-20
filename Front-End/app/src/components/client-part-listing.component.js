import React from 'react';
import Part from '../views/part-view.component';
import axios from 'axios';
import AgentPart from '../views/agent-part-view.component';
export default class AgentPartListing extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/parts')
        .then((response) => {
            this.setState({
                data : response.data
            })
        });
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    {this.state.data.map((part, index)=>(
                       <div key={index} id={index} class="col-sm-6">
                            <AgentPart 
                                key={part.partNo}
                                id={part.partNo} 
                                picture={part.partPicture} 
                                partId={part.partNo} 
                                description={part.partDescription} 
                                partName={part.partName} 
                                qty={part.part_QOH} 
                                currentPrice={part.currentPrice}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}