import React from 'react';
import Part from '../views/part-view.component';
import axios from 'axios';
export default class PartListing extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/parts')
        .then((response) => {
            console.log(response.data);
            this.setState({
                data : response.data
            })
        });
    }
    render(){
        return(
            <div class="container">
                <div class="row">
                    {this.state.data.map((part, index)=>(
                       <div class="col-sm-3">
                            <Part 
                                id={part.partNo} 
                                picture={part.partPicture} 
                                partId={part.partNo} 
                                description={part.partDescription} 
                                partName={part.partName} 
                                qty={part.qty} 
                                currentPrice={part.currentPrice}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}