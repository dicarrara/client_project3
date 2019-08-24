/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdbreact';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import SkillsCard from '../../components/SkillsCard/SkillsCard';
import EducationCard from '../../components/EducationCard/EducationCard';
import './Account.css';

import axios from 'axios';
axios.defaults.withCredentials = true;

let serverURL;
if (window.location.hostname === 'localhost') {
  serverURL = 'http://localhost:8080';
} else {
  serverURL = 'https://server-project3.herokuapp.com';
}

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.user._id,
      fullName: this.props.user.fullName,
      email: this.props.user.email,
      phone: this.props.user.phone,
      portfolioURL: this.props.user.portfolioURL,
      addressStreet: this.props.user.addressStreet,
      addressCity: this.props.user.addressCity,
      summary: this.props.user.summary
    };
  }

  api = {
    accountSubmit: url => {
      return axios.put(`${url}/api/account/details`, {
        id: this.state.id,
        fullName: this.state.fullName,
        email: this.state.email,
        phone: this.state.phone,
        portfolioURL: this.state.portfolioURL,
        addressStreet: this.state.addressStreet,
        addressCity: this.state.addressCity,
        summary: this.state.summary
      });
    }
  };

  submitAccountDetails = async event => {
    event.preventDefault();

    let res = await this.api.accountSubmit(serverURL);
    console.log(res);
    this.props.stateGrab();
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow style={{ paddingTop: '8%' }}>
            <MDBCol size="12">
              <h1>Account Info: </h1>
            </MDBCol>
          </MDBRow>
          <form>
            <MDBRow style={{ paddingTop: '2%' }}>
              <MDBCol size="6">
                <MDBRow style={{ paddingTop: '2%' }}>
                  <MDBCol size="6">
                    <MDBInput
                      type="text"
                      id="fullName"
                      className="form-control"
                      label="Full Name"
                      value={this.state.fullName}
                      onChange={this.handleChange}
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput
                      type="text"
                      id="email"
                      label="E-mail address"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ paddingTop: '2%' }}>
                  <MDBCol size="6">
                    <MDBInput
                      type="text"
                      id="phone"
                      className="form-control"
                      label="Phone Number"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput
                      type="text"
                      id="portfolioURL"
                      className="form-control"
                      label="Portfolio URL"
                      value={this.state.portfolioURL}
                      onChange={this.handleChange}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ paddingTop: '2%' }}>
                  <MDBCol size="6">
                    <MDBInput
                      type="text"
                      id="addressStreet"
                      className="form-control"
                      label="Street Address"
                      value={this.state.addressStreet}
                      onChange={this.handleChange}
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput
                      type="text"
                      id="addressCity"
                      className="form-control"
                      label="City, State and ZIP"
                      value={this.state.addressCity}
                      onChange={this.handleChange}
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol size="6">
                <MDBInput
                  type="textarea"
                  id="summary"
                  className="form-control"
                  rows="9"
                  label="Resume Summary"
                  value={this.state.summary}
                  onChange={this.handleChange}
                />
              </MDBCol>
            </MDBRow>
          </form>
          <MDBRow style={{ paddingTop: '2%' }}>
            <MDBCol size="12">
              <div className="text-center mt-4">
                <MDBBtn color="cyan" outline type="submit" onClick={this.submitAccountDetails}>
                  Update!
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol size="4">
              <EducationCard />
            </MDBCol>
            <MDBCol size="4">
              <ExperienceCard />
            </MDBCol>
            <MDBCol size="4">
              <SkillsCard />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

{
  /* <MDBRow style={{ paddingTop: '2%' }}>
<MDBTable>
  <MDBTableHead>
    <tr>
      <th>Skills</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </tr>
  </MDBTableHead>
  <MDBTableBody>
    <tr>
      <td />
      <td>Javascript</td>
      <td>Javascript</td>
      <td>Javascript</td>
    </tr>
  </MDBTableBody>
  <MDBTableHead>
    <tr>
      <th />
      <th>4</th>
      <th>5</th>
      <th>6</th>
    </tr>
  </MDBTableHead>
  <MDBTableBody>
    <tr>
      <td />
      <td>Javascript</td>
      <td>Javascript</td>
      <td>Javascript</td>
    </tr>
  </MDBTableBody>
  <MDBTableHead>
    <tr>
      <th />
      <th>7</th>
      <th>8</th>
      <th>9</th>
    </tr>
  </MDBTableHead>
  <MDBTableBody>
    <tr>
      <td />
      <td>Javascript</td>
      <td>Javascript</td>
      <td>Javascript</td>
    </tr>
  </MDBTableBody>
</MDBTable>
</MDBRow> */
}
