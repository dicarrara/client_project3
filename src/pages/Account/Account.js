/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
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
      user: {
        fullName: 'John Doe',
        email: 'test@test.com',
        addressStreet: 'somewhere Lane',
        addressCity: 'Denver',
        phone: 1234567890,
        portfolioURL: 'www.IEATWEIRDTHINGS.ninja',
        summary:
          'I am a terrible person who does not like to eat bugs, but I do enjoy chocolate sometimes',
        id: 123,
        userSchool: [
          {
            schoolName: 'Harvard',
            schoolLocation: 'US',
            schoolDegree: 'eating',
            schoolCourse: 'How to eat',
            schoolYearFrom: 2011,
            schoolYearTo: 2015
          },
          {
            schoolName: 'MIT',
            schoolLocation: 'US',
            schoolDegree: 'computerz',
            schoolCourse: 'How to computer',
            schoolYearFrom: 2011,
            schoolYearTo: 2015
          },
          {
            schoolName: 'DU',
            schoolLocation: 'US',
            schoolDegree: 'code',
            schoolCourse: 'How to code',
            schoolYearFrom: 2011,
            schoolYearTo: 2015
          }
        ],
        skill: ['eating', 'computerz', 'coding'],
        userWork: [
          {
            jobTitle: 'computer guy',
            jobDate: '2017 - 2019',
            jobSummary: 'did stuff'
          },
          {
            jobTitle: 'Burger King',
            jobDate: '2017 - 2019',
            jobSummary: 'did stuff'
          },
          {
            jobTitle: 'Dying',
            jobDate: '2020 - 2020',
            jobSummary: 'Died'
          }
        ]
      }
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
      .post(`${serverURL}/api/aboutme`, {
        education: this.state.education,
        skills: this.state.skills
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      email: '',
      password: ''
    });
  };

  async componentDidMount() {
    await axios
      .get(`${serverURL}/api/checkauthentication`)
      .then(response => {
        console.log(response);
        this.setState({
          authed: true,
          user: {
            fullName: response.data.res.fullName,
            id: response.data.res._id,
            email: response.data.res.email
          }
        });
      })
      .catch(error => {
        this.setState({ authed: false });
      });
    console.log(this.state.authed);
    console.log(this.state.user.id);
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
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
              <EducationCard />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="4">
              <SkillsCard />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12">
              <ExperienceCard />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
