import React, { Component } from 'react';
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
    console.log(this.state.email);
    console.log(this.state.password);

    axios
      .post('https://server-project3.herokuapp.com/api/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        window.location.href = '/';
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6">
            <MDBCard className="d-flex justify-content-center">
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <form onSubmit={this.handleSubmit}>
                  <div className="grey-text">
                    <MDBInput
                      id="email"
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      onChange={this.handleChange}
                      value={this.state.email}
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      id="password"
                      label="Type your password"
                      icon="lock"
                      type="password"
                      onChange={this.handleChange}
                      value={this.state.password}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="light-blue"
                      className="mb-3"
                      disabled={!this.validateForm}
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Login
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter className="d-flex justify-content-center">
                  <div className="font-weight-light">
                    <p>Not a member? Sign Up</p>
                    <p>Forgot Password?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
