//render UI for agent dashboard
//list purchase orders

import React from 'react';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            orders: [],
            parts: []
        };
    }
    render(){
        return(
            <div style={{marginTop: '200px'}}>
                <p>Agent dashboard</p>
            </div>
        );
    }
}