import Login from "./pages/signin.component";
import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Home from "./pages/client.home.component";
import Order from "./pages/client.order.component";
import AuthService from "./services/auth.service";
import Profile from "./pages/profile.component";
import Welcome from "./pages/welcome.component";
import Dashboard from "./pages/agent.dashboard.component";
import "./App.css";
import SignUp from "./pages/signup.component";
import About from "./pages/about.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined,
      username: "",
      user: "",
      parts: [],
      userbalance: [],
      orders: [],
      pending: [],
      processed: [],
      created: [],
    };
  }
  componentDidMount() {
    const user = AuthService.fetchCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        username: user.username,
      });
      this.getUserInfo(user.id);
      this.getPending(user.id);
      this.getProcessed(user.id);
    }
  }
  getUserInfo = (id) => {
    axios.get(`http://localhost:3000/clients/${id}`).then((response) => {
      this.setState({
        userbalance: response.data,
      });
    });
  };
  getParts = () => {
    axios.get("http://localhost:3000/parts").then((response) => {
      this.setState({ parts: response.data });
    });
  };
  getPending = (id) => {
    axios.get(`http://localhost:3000/pos/pendings/${id}`).then((response) => {
      this.setState({
        pending: response.data,
      });
    });
  };
  getProcessed = (id) => {
    axios.get(`http://localhost:3000/pos/processed/${id}`).then((response) => {
      this.setState({
        processed: response.data,
      });
    });
  };
  getCreated = (id) => {
    axios.get(`http://localhost:3000/pos/created/${id}`).then((response) => {
      this.setState({
        created: response.data,
      });
    });
  };

  logOut() {
    AuthService.signout();
    window.location.href = "http://localhost:3001/login";
  }
  render() {
    const { currentUser, userbalance, pending, processed } = this.state;
    const user = AuthService.fetchCurrentUser();
    var role = "";
    if (user !== null) {
      role = user.roles;
    }
    return (
      <div className="App">
        <div style={{ maxWidth: "inherit" }} className="container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <SignUp />
              </Route>
              <div>
                <Navbar
                  className="navbar"
                  fixed="top"
                  collapseOnSelect
                  expand="lg"
                >
                  <Navbar.Brand
                    style={{ fontWeight: "bold", fontSize: "x-large" }}
                    href="/"
                  >
                    READ📚IT
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link
                        key="book"
                        style={{
                          margin: "0px 10px 0px 10px",
                          width: "inherit",
                        }}
                        href="/"
                      >
                        Books 📖
                      </Nav.Link>
                      <Nav.Link
                        key="order"
                        style={{ margin: "0px 10px 0px 10px" }}
                        href="/orders"
                      >
                        Orders 📦
                      </Nav.Link>
                      <Nav.Link
                        key="about"
                        style={{ margin: "0px 10px 0px 10px" }}
                        href="/about"
                      >
                        About us ℹ️
                      </Nav.Link>
                      {role === "agent" && (
                        <Nav.Link
                          key="dashboard"
                          style={{ margin: "0px 10px 0px 10px" }}
                          href="/dashboard"
                        >
                          Dashboard
                        </Nav.Link>
                      )}
                    </Nav>

                    <Nav>
                      {this.state.userbalance.map((balance) => {
                        return (
                          <Nav.Link
                            key="balance"
                            style={{
                              margin: "0px 10px 0px 10px",
                              textAlign: "-webkit-center",
                              placeSelf: "center",
                            }}
                            href="/profile"
                          >
                            💰 Balance: $
                            <span style={{ fontWeight: "bold" }}>
                              {balance.moneyOwed}
                            </span>
                          </Nav.Link>
                        );
                      })}
                      {currentUser ? (
                        <NavDropdown
                          title={this.state.username}
                          id="basic-nav-dropdown"
                          className="justify-content-end"
                        >
                          <NavDropdown.Item href="profile">
                            Profile
                          </NavDropdown.Item>
                          <NavDropdown.Item href="orders">
                            Orders
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item onClick={this.logOut}>
                            Logout
                          </NavDropdown.Item>
                        </NavDropdown>
                      ) : (
                        <Nav.Link
                          eventKey={2}
                          href="login"
                          className="justify-content-end"
                        >
                          Login
                        </Nav.Link>
                      )}
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/welcome">
                  <Welcome />
                </Route>
                <Route exact path="/orders">
                  <Order />
                </Route>
                <Route exact path="/orders/:id">
                  <Order />
                </Route>
                <Route exact path="/profile">
                  <Profile
                    role={role}
                    balance={userbalance}
                    pending={pending}
                    processed={processed}
                  />
                </Route>
                <Route exact path="/dashboard">
                  <Dashboard user={user} />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
              </div>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
