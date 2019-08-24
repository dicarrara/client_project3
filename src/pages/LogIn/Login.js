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
axios.defaults.withCredentials = true;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
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
        let user = response.data.user;
        // Updates user state
        this.props.updateState(user, null, null, null, 'user');

        if (typeof user.userWork === 'undefined' || user.userWork.length === 0) {
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
        if (typeof user.userProjects === 'undefined' || user.userProjects.length === 0) {
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
        if (typeof user.userProjects === 'undefined' || user.userProjects.length === 0) {
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
      })
      .catch(error => {
        console.log(error);
        this.setState({
          email: '',
          password: ''
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
                <MDBCardHeader className="form-header cyan rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>

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
      </MDBContainer>
    );
  }
}
