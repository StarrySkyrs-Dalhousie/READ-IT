import React from 'react';
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import AuthService from "../services/auth.service";

export default class Announcement extends React.Component {

    render() {
        const currentUser = AuthService.fetchCurrentUser();
        var username = null;
        if(currentUser!==null){
            username = currentUser.username;
        }
        return(
            <div style={{marginTop: "100px", backgroundColor:'none',  marginBottom: "50px",padding: "20px"}}>
                <Row style={{justifyContent: 'center'}}>
                <div>
                    {username===null && <p> Create an <Link to="/login">account</Link> before placing order </p>}
                    {username!==null && <p style={{fontSize:'20px'}}>Welcome back <span style={{fontSize:'35px'}}>👋🏿</span>, <strong>{currentUser.username}</strong></p>}
                </div>
                </Row>
            </div>
        )
    }
}