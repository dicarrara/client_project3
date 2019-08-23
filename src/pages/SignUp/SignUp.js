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
  MDBCardTitle,
  MDBCardHeader,
  MDBIcon
} from 'mdbreact';
import axios from 'axios';
import './SignUp.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
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
    loginConfirmation = loginConfirmation.data.user;

    // Updates user state
    this.props.updateState(loginConfirmation, null, null, null, 'user');

    if (
      typeof loginConfirmation.userWork === 'undefined' ||
      loginConfirmation.userWork.length === 0
    ) {
      this.props.updateState(
        'userWork',
        [
          {
            jobTitle: 'Full Stack Developer',
            jobCompany: 'Google',
            jobDate: '2017 - 2019',
            jobSummary:
              'Handled full stack web development for Google. Surprisingly, they are a simple startup company that utilizes the MERN stack. Leaving for better opportunities!'
          }
        ],
        null,
        null,
        null
      );
    }
    if (
      typeof loginConfirmation.userProjects === 'undefined' ||
      loginConfirmation.userProjects.length === 0
    ) {
      this.props.updateState(
        'userProjects',
        [
          {
            projectName: 'elgooG',
            projectURL: 'moc.elgooG.www',
            projectDesc:
              'A destination for everything! The internet is at your fingertips with my AMAZING project'
          }
        ],
        null,
        null,
        null
      );
    }
    if (
      typeof loginConfirmation.userSchool === 'undefined' ||
      loginConfirmation.userSchool.length === 0
    ) {
      this.props.updateState(
        'userSchool',
        [
          {
            schoolName: 'MIT',
            schoolDegree: 'B.S.',
            schoolYearFrom: 2011,
            schoolYearTo: 2015
          }
        ],
        null,
        null,
        null
      );
    }
    console.log(this.props.user);
    // Authorizes page
    this.props.updateState(true, null, null, null, 'authed');
  };

  render() {
    return (
      <MDBContainer style={{ marginBottom: '50px' }}>
        <MDBRow
          className="d-flex justify-content-center"
          style={{ marginTop: '6%', paddingTop: '0%' }}
        >
          <MDBCol md="6">
            <MDBCard style={{ width: '35vw', marginBotton: 'auto' }}>
              <MDBCardBody>
                <MDBCardHeader className="form-header cyan rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Signup:
                  </h3>
                </MDBCardHeader>
                <form onSubmit={this.handleSubmit}>
                  {/* <p className="h3  md-6">Sign up</p> */}
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
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
