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
  MDBListGroupItem,
  MDBListGroup
} from 'mdbreact';
import AccountCard from '../../components/AccountCard/AccountCard';
import AccountList from './AccountList/AccountList';
import './Account.css';

import update from 'immutability-helper';

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
      summary: this.props.user.summary,
      education: this.props.user.education,
      experience: this.props.user.experience,
      skills: this.props.user.skills
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
        summary: this.state.summary,
        skills: this.state.skills
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

  handleChangeSkill = event => {
    let newChange = update(this.state, {
      skills: {
        [event.target.id]: { $set: event.target.value }
      }
    });
    this.setState(newChange);
  };

  render() {
    return (
      <>
        <MDBContainer style={{ marginBottom: '40px' }}>
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

          <MDBRow>
            <MDBCol size="1" />
            {Object.keys(this.props.user.skills).map((skillKey, i) =>
              skillKey !== '_id' ? (
                <MDBCol size="1" key={i}>
                  <MDBInput
                    type="text"
                    id={skillKey}
                    className="form-control"
                    label={skillKey}
                    value={this.state.skills[skillKey]}
                    onChange={this.handleChangeSkill}
                  />
                </MDBCol>
              ) : (
                ''
              )
            )}
          </MDBRow>
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
              <h2>Education: </h2>
              {this.props.user.userSchool.map((education, i) => (
                <AccountList
                  info={education}
                  id={this.props.user._id}
                  identify={'userSchool'}
                  key={i}
                  stateGrab={this.props.stateGrab}
                />
              ))}
            </MDBCol>
            <MDBCol size="4">
              <h2>Experience: </h2>
              {this.props.user.userWork.map((job, i) => (
                <AccountList
                  info={job}
                  id={this.props.user._id}
                  identify={'userWork'}
                  key={i}
                  stateGrab={this.props.stateGrab}
                />
              ))}
            </MDBCol>
            <MDBCol size="4">
              <h2>Projects: </h2>
              {this.props.user.userProjects.map((project, i) => (
                <AccountList
                  info={project}
                  id={this.props.user._id}
                  identify={'userProjects'}
                  key={i}
                  stateGrab={this.props.stateGrab}
                />
              ))}
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ paddingTop: '2%' }}>
            <MDBCol size="4">
              <AccountCard
                title={'Education'}
                words={[
                  { schoolName: 'School Name' },
                  { schoolDegree: 'Degree' },
                  { schoolYearFrom: 'Year Start' },
                  { schoolYearTo: 'Year Ended' }
                ]}
                identity={'userSchool'}
                stateGrab={this.props.stateGrab}
                userID={this.props.user._id}
              />
            </MDBCol>
            <MDBCol size="4">
              <AccountCard
                title={'Experience'}
                words={[
                  { jobTitle: 'Job Title' },
                  { jobCompany: 'Company' },
                  { jobDate: 'Date Range' },
                  { jobSummary: 'Summary of Duties' }
                ]}
                identity={'userWork'}
                stateGrab={this.props.stateGrab}
                userID={this.props.user._id}
              />
            </MDBCol>
            <MDBCol size="4">
              <AccountCard
                title={'Projects'}
                words={[
                  { projectName: 'Project Name' },
                  { projectURL: 'URL to project' },
                  { projectDesc: 'Description of Project' }
                ]}
                identity={'userProjects'}
                stateGrab={this.props.stateGrab}
                userID={this.props.user._id}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
