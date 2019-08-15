import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './Account.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Account extends Component {
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

  logout = function() {
    let serverURL;
    if (window.location.hostname === 'localhost') {
      serverURL = 'http://localhost:8080';
    } else {
      serverURL = 'https://server-project3.herokuapp.com';
    }

    axios
      .get(`${serverURL}/logout`)
      .then(response => {
        console.log(response);
        window.location.href = '/home';
      })
      .catch(error => {
        console.log(error);
      });
  };

  // componentWillMount() {
  //   let serverURL;
  //   if (window.location.hostname === 'localhost') {
  //     serverURL = 'http://localhost:8080';
  //   } else {
  //     serverURL = 'https://server-project3.herokuapp.com';
  //   }

  //   axios
  //     .get(`${serverURL}/api/checkauthentication`)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       window.location.href = '/home';
  //     });
  // }

  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <p>
                <a href="/account" onClick={this.logout}>
                  Logout?
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
