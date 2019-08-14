import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';
// import LoaderButton from "../components/LoaderButton";
import './SignUp.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
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
      this.state.firstname > 0 &&
      this.state.lastname > 0
    );
  }

  handleChange = function(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = function(event) {
    event.preventDefault();

    axios
      .post('https://server-project3.herokuapp.com/api/add/account', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        window.location.href('/');
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  render() {
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="firstName" bssize="large">
            <FormLabel>First Name</FormLabel>
            <FormControl
              value={this.state.firstname}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="lastName" bssize="large">
            <FormLabel>Last Name</FormLabel>
            <FormControl
              value={this.state.lastname}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="email" bssize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" bssize="large">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm}
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
