import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './JobSearch.css';
import CardForJob from '../../components/CardForJob/CardForJob';
import axios from 'axios';

export default class JobSearch extends Component {
  // this.authChange = this.authChange.bind(this);
  state = {
    jobSearch: '',
    jobLocation: '',
    jobs: []
  };

  validateForm() {
    return this.state.jobSearch.length > 0;
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
    let skillSearch = '';
    for (var key in this.props.user.skills) {
      if (key.startsWith('skill')) {
        skillSearch = skillSearch + this.props.user.skills[key] + '~';
      }
    }
    skillSearch = encodeURI(skillSearch);
    axios
      .get(`${serverURL}/api/${this.state.jobSearch}/${this.state.jobLocation}/${skillSearch}`)
      .then(response => {
        console.log(response.data.res);
        this.setState({ jobs: response.data.res });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <MDBContainer style={{ marginBottom: '35px' }}>
          <MDBRow>
            <MDBCol size="6">
              <h1 className="text-black">Search for a job</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ paddingTop: '4%' }}>
            <MDBCol md="5">
              <div className="active-pink-3 active-pink-4 mb-4">
                <MDBInput
                  size="lg"
                  id="jobSearch"
                  onChange={this.handleChange}
                  value={this.state.jobSearch}
                  className="form-control"
                  type="text"
                  label="Job Title"
                  aria-label="Search"
                />
              </div>
            </MDBCol>
            <MDBCol md="2" />

            <MDBCol md="5">
              <div className="active-pink-3 active-pink-4 mb-4">
                <MDBInput
                  size="lg"
                  id="jobLocation"
                  onChange={this.handleChange}
                  value={this.state.jobLocation}
                  className="form-control"
                  type="text"
                  label="Location"
                  aria-label="Location"
                />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ paddingTop: '2%' }}>
            <MDBBtn
              gradient="aqua"
              rounded
              size="lg"
              type="submit"
              className="mr-center"
              onClick={this.handleSubmit}
            >
              Search
            </MDBBtn>
          </MDBRow>
          <MDBRow>
            {this.state.jobs.map(job => {
              return (
                <CardForJob
                  id={job.id}
                  title={job.title}
                  description={job.description}
                  company={job.company}
                  url={job.url}
                  matching={job.descriptionArr}
                />
              );
            })}
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
