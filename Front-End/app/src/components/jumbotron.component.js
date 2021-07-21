import React from 'react';
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import "./animation.css"
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
                {/* {username!==null && <h1>Welcome back, {currentUser.username}!</h1>}
                {username===null && <h1>Hi guest,</h1>}
                {username===null && <p> create an <Link to="/login">account</Link> before placing order </p>}
                <p>
                    <strong>Did you know?: </strong>
                    The world’s tallest book, “Collection of Maritime Rules”, is stored in the Amsterdam Museum. Its height is about 6.4 feet, and it’s over 3 feet wide. Can you imagine the scale of this giant folio!?
                </p>
                <p>
                    <Link to="https://medium.com/@readtoplay/12-amazing-facts-you-didnt-know-about-reading-85f886176a7b">
                        <Button variant="primary">Learn more</Button>
                    </Link>
                </p> */}
                <Row style={{justifyContent: 'center'}}>
                <div>
                {username===null && <p> create an <Link to="/login">account</Link> before placing order </p>}
                {username!==null && <p style={{fontSize:'20px'}}>Welcome back <span style={{fontSize:'35px'}}>👋🏿</span>, <strong>{currentUser.username}</strong></p>}
                </div>
                </Row>
            </div>
        )
    }
}