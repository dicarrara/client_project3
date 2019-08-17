/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";

import "./Account.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import EducationCard from "../../components/EducationCard/EducationCard";
import axios from "axios";
axios.defaults.withCredentials = true;

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: ""
    };
  }

  logout = function() {
    let serverURL;
    if (window.location.hostname === "localhost") {
      serverURL = "http://localhost:8080";
    } else {
      serverURL = "https://server-project3.herokuapp.com";
    }

    axios
      .get(`${serverURL}/logout`)
      .then(response => {
        console.log(response);
        window.location.href = "/home";
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
            <MDBCol size="6">
              <h2>Pesonal Data</h2>
              <h1>name:{this.state.fullName}</h1>
              <p>email:</p>
              <p>phone number:</p>
              <p>
                {/* <a href="/account" onClick={this.logout}>
                  Logout?
                </a> */}
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="4">
              <EducationCard/>
            </MDBCol>
            <MDBCol size="4">
              <SkillsCard/>
            </MDBCol>
            <MDBCol size="4">
              <ExperienceCard/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
