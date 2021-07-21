import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Animate from '../Animation';
import study from "../Animation/boy-studying-science.json";
import "./welcome.css"
export default class Welcome extends React.Component {
    render(){
        return(
            <Container style={{height:'100vh', paddingTop:'80px'}}>
                <Row style={{height:'-webkit-fill-available'}}>
                    <Col style={{alignSelf:'center'}} >
                        <h1 className="announcement"><strong>Selling the best material</strong> to help you in your quest to conquer and master computer science</h1>
                        <br/>
                        <Link className="nav-item getstarted" to="/register">GET STARTED 😀</Link>
                    </Col>
                    <Col style={{alignSelf:'center'}} >
                        <Animate lotti={study} width={300} height={300}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}