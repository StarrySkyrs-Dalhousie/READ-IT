import React from 'react';
import axios from 'axios';

export default class RemoveLine extends React.Component{
    constructor(){
        super();
        this.state={
            id:'',
        }
    }
    componentDidMount(){
        this.setState({
            id: this.props.id
        })
    }
    handleSubmit= e => {
        e.preventDefault();
        axios
        .get(`http://localhost:3000/lines/delete/${this.state.id}`)
        .then(() => window.location.reload(false))
        .then(() => console.log('Line removed'))
        .catch(err => {
          console.error(err);
        });
    }
   
      render(){
          return(
              <div>
                   <a href="/orders" onClick={this.handleSubmit} class="btn btn-warning btn-round">X</a>
              </div>
                 
          );
      }
}