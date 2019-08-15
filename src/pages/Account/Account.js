/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import './Account.css';
import axios from 'axios';

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

  componentWillMount() {
    console.log(document.cookie['connection.sid']);
    if (!document.cookie) {
      console.log('found!');
    }
  }

  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <p>
                <a
                  onClick={() =>
                    axios
                      .get('https://server-project3.herokuapp.com/logout')
                      .then(response => {
                        console.log(response);
                      })
                      .catch(error => {
                        console.log(error);
                      })
                  }
                >
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
