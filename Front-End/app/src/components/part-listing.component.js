
import React from 'react';

export default class PartListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: []
        };
    }
    render(){
        return(
            <div>
                <p>Part listing</p>
            </div>
        );
    }
}