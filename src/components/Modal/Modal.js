import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBInput,
  MDBIcon,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from 'mdbreact';
import TextArea from '../TextArea/TextArea';
import axios from 'axios';

let serverURL;
if (window.location.hostname === 'localhost') {
  serverURL = 'http://localhost:8080';
} else {
  serverURL = 'https://server-project3.herokuapp.com';
}

export default class ModalPage extends Component {
  state = {
    vis: false,
    schoolName: '',
    schoolDegree: '',
    schoolYearFrom: '',
    schoolYearTo: '',
    jobTitle: '',
    jobCompany: '',
    jobDate: '',
    jobSummary: '',
    projectName: '',
    projectURL: '',
    projectDesc: ''
  };

  toggle = () => {
    this.setState({
      vis: !this.state.vis
    });
  };

  saveNew = async event => {
    event.preventDefault();
    let update;
    let path;
    if (this.props.identity == 'userSchool') {
      update = {
        schoolName: this.state.schoolName,
        schoolDegree: this.state.schoolDegree,
        schoolYearFrom: this.state.schoolYearFrom,
        schoolYearTo: this.state.schoolYearTo
      };
      path = 'school';
    } else if (this.props.identity == 'userWork') {
      update = {
        jobTitle: this.state.jobTitle,
        jobCompany: this.state.jobCompany,
        jobDate: this.state.jobDate,
        jobSummary: this.state.jobSummary
      };
      path = 'job';
    } else if (this.props.identity == 'userProjects') {
      update = {
        projectName: this.state.projectName,
        projectURL: this.state.projectURL,
        projectDesc: this.state.projectDesc
      };
      path = 'projects';
    }

    let res = await axios.put(`${serverURL}/api/account/${path}`, {
      id: this.props.userID,
      ...update
    });

    console.log(res);
    this.setState({
      vis: false,
      schoolName: '',
      schoolDegree: '',
      schoolYearFrom: '',
      schoolYearTo: '',
      jobTitle: '',
      jobCompany: '',
      jobDate: '',
      jobSummary: '',
      projectName: '',
      projectURL: '',
      projectDesc: ''
    });
    this.props.stateGrab();
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="cyan" onClick={this.toggle}>
          Add
        </MDBBtn>
        <MDBModal isOpen={this.state.vis} toggle={this.toggle} centered>
          <MDBModalHeader toggle={this.toggle}>{this.props.title}</MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="grey-text">
                {this.props.words.map(word => (
                  <MDBInput
                    label={Object.values(word)[0]}
                    id={Object.keys(word)[0]}
                    key={Object.keys(word)[0]}
                    group
                    type="text"
                    validate
                    value={this.state[Object.keys(word)[0]]}
                    onChange={this.handleChange}
                  />
                ))}
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.saveNew}>
              Save
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
