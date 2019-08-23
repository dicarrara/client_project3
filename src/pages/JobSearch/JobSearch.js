import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
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

    axios
      .get(
        `${serverURL}/api/${this.state.jobSearch}/${
          this.state.jobLocation
        }/true`
      )
      .then(response => {
        console.log(response.data.res);
        this.setState({ jobs: response.data.res });
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
      <>
        <MDBContainer style={{ marginBottom: '35px' }}>
          <MDBRow>
            <MDBCol size="6">
              <h1 className="text-black">Search for a job</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6">
              <div className="active-pink-3 active-pink-4 mb-4">
                <input
                  id="jobSearch"
                  onChange={this.handleChange}
                  value={this.state.jobSearch}
                  className="form-control"
                  type="text"
                  placeholder="Job Title"
                  aria-label="Search"
                />
              </div>
            </MDBCol>

            <MDBCol md="6">
              <div className="active-pink-3 active-pink-4 mb-4">
                <input
                  id="jobLocation"
                  onChange={this.handleChange}
                  value={this.state.jobLocation}
                  className="form-control"
                  type="text"
                  placeholder="Location"
                  aria-label="Location"
                />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
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
                  key={job.id}
                  title={job.title}
                  description={job.description}
                  company={job.company}
                  url={job.url}
                />
              );
            })}
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
