//render the welcome page after login
//list all the parts

import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: []
        };
    }
    render(){
        return(
            <div>
                <p>Home</p>
            </div>
        );
    }
}