import React, { Component } from 'react';
import axios from 'axios';

class AddLine extends Component {
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
      this.getConnectedUserPOS(this.props.user_id);
  }
  getConnectedUserPOS = (id) => {
    axios.get(`http://localhost:3000/pos/client/${id}`)
    .then((response) => {
        this.setState({
            pos : response.data
        })
    });
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

    const {part_no,unit,poNo,price} = this.state;

    const line = {
      part_no,
      unit,
      poNo,
      price
    };

    axios
      .post('http://localhost:3000/lines/add', line)
      .then(() => console.log('Line added'))
      .then(() => window.location.reload(false))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
              <form method="POST" onSubmit={this.handleSubmit}>
                <div class="input-group">
                    <button class="btn btn-outline-secondary" type="submit"><i class="fas fa-cart-plus"></i></button>
                    <select value={this.state.poNo} onChange={this.handleChange} class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                        <option value="defaut">Choose a purchase</option>
                        {this.state.pos.map((po)=>
                            <option value={po.poNo}>{po.poNo}</option>
                        )}
                    </select>
                    <input
                        type="number"
                        className="form-control"
                        name="unit"
                        placeholder="Unit"
                        onChange={this.handleInputChange}
                    />

                </div>
              </form>
          </div>
    );
  }
}

export default AddLine;