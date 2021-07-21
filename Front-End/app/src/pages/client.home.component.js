import React from 'react';
import axios from 'axios';
import "./style.css";
import PartListing from '../components/part-listing.component';
import Announcement from '../components/jumbotron.component';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: [],
        }
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

    render() {
        return(
            <div>
                <Announcement/>
                <PartListing/>
            </div>
        );
    }
}