import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import {Row, Col} from 'react-bootstrap/'
import AuthService from "../services/auth.service";
import avatar from "../Animation/avatar.png"
import "./welcome.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.fetchCurrentUser();

    if (!currentUser) this.setState({ redirect: "/login" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div style={{textAlign: '-webkit-center'}} className="container">
        {(this.state.userReady) ?
        <div>
          <div className="spacer">
          <br></br>
            <img src={avatar}></img>
            <br></br>
            <strong>{currentUser.username}</strong>
            {this.props.balance.map((balance)=>{
              return <div>
                <p>{balance.clientCity}</p>
              </div>
            })}
            {this.props.balance.map((balance)=>{
              return <div style={{width:"300px"}} className="card">
                <p style={{padding:"25px"}}>Balance: ${balance.moneyOwed}</p>
              </div>
            })}
            <div style={{width:"300px", marginTop:'20px'}} className="card">
            <Row>
                <Col>Open</Col>
                <Col>Pending</Col>
                <Col>Processed</Col>
              </Row>
            </div>

          </div>

      </div>: null}
      </div>
    );
  }
}
