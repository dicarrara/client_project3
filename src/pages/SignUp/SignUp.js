import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      redirect: false
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword &&
      this.state.fullName > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  // axios to create account
  addAccount(url) {
    return axios.post(`${url}/api/add/account`, {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    });
  }

  // axios to login with credentials from create account
  loginAccount(url, cred) {
    return axios.post(`${url}/api/login`, {
      email: cred.data.email,
      password: cred.data.password
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    let serverURL;
    if (window.location.hostname === 'localhost') {
      serverURL = 'http://localhost:8080';
    } else {
      serverURL = 'https://server-project3.herokuapp.com';
    }

    let credentials = await this.addAccount(serverURL);
    let loginConfirmation = await this.loginAccount(serverURL, credentials);

    console.log(loginConfirmation);
    this.props.auth(true);
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h3  md-6">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  id="fullName"
                  key="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
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
                  id="password"
                  key="password"
                  validate
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Confirm your password"
                  icon="exclamation-triangle"
                  group
                  type="password"
                  id="confirmPassword"
                  key="confirmPassword"
                  validate
                  value={this.state.confirmPassword}
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
                  Submit
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        {this.state.redirect ? <Redirect to="/" /> : <></>}
      </MDBContainer>
    );
  }
}
