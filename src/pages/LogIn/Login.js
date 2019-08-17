import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from 'mdbreact';
import axios from 'axios';
axios.defaults.withCredentials = true;


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let serverURL;
    if (window.location.hostname === "localhost") {
      serverURL = "http://localhost:8080";
    } else {
      serverURL = "https://server-project3.herokuapp.com";
    }

    axios
      .post(`${serverURL}/api/login`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        this.props.authenticate(true);
        return <Redirect to="/" />;
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h3 text-center md-6">Log In</p>
              <div className="grey-text">
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  id="email"
                  key="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  id="password"
                  key="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="cyan lighten-1"
                  className="mb-3"
                  disabled={!this.validateForm}
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Log In
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
