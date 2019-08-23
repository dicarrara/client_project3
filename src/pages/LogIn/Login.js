import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle
} from 'mdbreact';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false
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
    if (window.location.hostname === 'localhost') {
      serverURL = 'http://localhost:8080';
    } else {
      serverURL = 'https://server-project3.herokuapp.com';
    }

    axios
      .post(`${serverURL}/api/login`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        this.props.authenticate();
        this.setState({
          email: '',
          password: '',
          redirect: true
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          email: '',
          password: '',
          redirect: false
        });
      });
  };

  render() {
    return (
      <MDBContainer style={{ marginBottom: '35px' }}>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol className="d-flex justify-content-center" md="6">
            <MDBCard style={{ width: '35vw', marginBotton: 'auto' }}>
              <MDBCardBody>
                <MDBCardTitle>Log In</MDBCardTitle>
                <form onSubmit={this.handleSubmit}>
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
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {this.state.redirect ? <Redirect to="/" /> : <></>}
      </MDBContainer>
    );
  }
}
