import React, { Component } from 'react';
// import NavBar from "../../components/NavBar/NavBar";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let serverURL;
    if (window.location.hostname === 'localhost') {
      serverURL = 'http://localhost:8080';
    } else {
      serverURL = 'https://server-project3.herokuapp.com';
    }
    axios.get(`${serverURL}/logout`);
    setTimeout(() => {
      this.props.auth(false);
    }, 1000 * 3);
  }

  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="6">
              <h1 className="text-black">You have successfully logged out!</h1>
              <br />
              <br />
              <br />
              <br />
              <p className="text-black">
                Please have a great day, hope to see you again!
              </p>
              <div />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
