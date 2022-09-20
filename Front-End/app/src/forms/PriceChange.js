import React, { Component } from 'react';
import axios from 'axios';

class PriceChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
        poNo: "default",
        pos: [],
        part_no: '',
        unit: '',
        price: '',
        id:''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
      this.setState({
          id: this.props.user_id,
          part_no: this.props.id,
          poNo: this.props.poNo,
          price: this.props.price
      })
       
  }
 
 
  handleChange(e) {
    this.setState({ poNo: e.target.value });
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/parts/pricechange/${this.props.partNo}`, {
          price: this.state.price
      })
      .then(() => console.log('Price changed'))
      .then(() => window.location.reload(false))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
              <form method="GET" onSubmit={this.handleSubmit}>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Unit"
                        onChange={this.handleInputChange}
                    />
                    <button class="btn btn-outline-secondary" type="submit">Save</button>
              </form>
          </div>
    );
  }
}

export default PriceChange;