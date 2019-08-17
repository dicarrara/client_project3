import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';
// import LoaderButton from "../components/LoaderButton";
import './SignUp.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

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
    console.log(credentials);
    let loginConfirmation = await this.loginAccount(serverURL, credentials);
    console.log(loginConfirmation);

    let auth = await axios.get(`${serverURL}/api/checkauthentication`);

    console.log(auth);

    this.props.authenticate(true);

    this.setState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      redirect: true
    });
  };

  render() {
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="fullName" bssize="large">
            <FormLabel>Full Name</FormLabel>
            <FormControl
              value={this.state.fullName}
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

        {this.state.redirect ? <Redirect to="/" /> : <Redirect to="/signup" />}
      </div>
    );
  }
}
