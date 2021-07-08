//show all hte order by using client ID 

import React from 'react';

export default class OrderListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        };
    }
    render(){
        return(
            <div>
                <p>Orders</p>
            </div>
        );
    }
}