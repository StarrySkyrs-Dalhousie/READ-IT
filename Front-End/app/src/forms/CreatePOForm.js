import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap/'

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientCompId: this.props.id
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
 
    axios
      .post('http://localhost:3000/pos/add', {"clientCompId":this.props.id})
      .then(() => console.log('PO Created'))
      .then(() => window.location.reload(false))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
      console.log('ey '+this.state.clientCompId)
    return (
      <div>
        <br />
        <div className="container">
          <div class="row justify-content-md-center">
              <form method="POST" style={{textAlign:'-webkit-center'}} class="col" onSubmit={this.handleSubmit}>
                <div style={{ width: '30%' }}>
                    <Button style={{position:'fixed',bottom:'40px', right:'40px'}} variant="primary" type="submit">Place a new order</Button>
                </div>
              </form>
          </div>
          </div>
      </div>
    );
  }
}

export default Create;