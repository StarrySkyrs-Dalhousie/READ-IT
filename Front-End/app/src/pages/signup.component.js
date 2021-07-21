import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input"; 
import CheckButton from "react-validation/build/button";
import {Link} from "react-router-dom"
import "./style.css";

import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
            this.handleSignup = this.handleSignup.bind(this);
            this.onChangeCity = this.onChangeCity.bind(this);
            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeRole = this.onChangeRole.bind(this);
            this.onChangeUsername = this.onChangeUsername.bind(this);
            this.onChangePassword = this.onChangePassword.bind(this);
        
            this.state = {
              username: "",
              password: "",
              role: "",
              city:"",
              name:"",
              loading: false,
              message: "",
              redirect: "",
            }; 
    }
    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    onChangeName(e) {
        this.setState({
          name: e.target.value
        });
    }
    onChangeCity(e) {
        this.setState({
          city: e.target.value
        });
    }
    onChangeRole(e) {
        this.setState({
          role: e.target.value
        });
    }
    handleSignup(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
            AuthService.signup(this.state.username, this.state.password, this.state.city, this.state.role, this.state.name)
            .then(()=>{
              window.location.href = "http://localhost:3001/login";
            },
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
      
                this.setState({
                  loading: false,
                  message: resMessage
                });
              }
            )
        } else {
          this.setState({
            loading: false
          });
        }
      }
render() {
    return (
      <div className="col-md-12">
        <div style={{background:'transparent', marginBottom: '50px', textAlign:'-webkit-center', marginTop: '90px'}}>
          <h3 style={{textAlign: 'center', margin:'10px'}}>Register</h3>

          <Form
            onSubmit={this.handleSignup}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                style={{width:'250px'}}
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Name</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                placeholder="Name"
                style={{width:'250px'}}
                value={this.state.name}
                onChange={this.onChangeName}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">City</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                style={{width:'250px'}}
                placeholder="ex: Halifax"
                value={this.state.city}
                onChange={this.onChangeCity}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Role</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                placeholder="client or agent"
                style={{width:'250px'}}
                value={this.state.role}
                onChange={this.onChangeRole}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                style={{width:'250px'}}
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
              style={{width: 'inherit'}}
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>SignUp</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
          <Link to={"/login"} className="nav-link">
                  Already have an account?
            </Link>
        </div>
      </div>
    );
  }
}