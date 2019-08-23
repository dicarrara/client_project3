import React from 'react';
import Header from './Header/Header';
import History from './History/History';
import Summary from './Summary/Summary';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import FooterResume from './FooterResume/FooterResume';
import './Resume.css';
import axios from 'axios';
import { object } from 'prop-types';

let serverURL;
if (window.location.hostname === 'localhost') {
  serverURL = 'http://localhost:8080';
} else {
  serverURL = 'https://server-project3.herokuapp.com';
}

class Resume extends React.Component {
  state = {
    user: {
      fullName: 'John Doe',
      email: 'test@yahoo.com',
      addressStreet: 'Somewhere Lane',
      addressCity: 'Aurora, CO 80012',
      phone: '(123) 456-7890',
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
  // // get the data from our DB
  // async componentDidMount() {
  //   await axios.get(`${serverURL}/api/checkauthentication`).then(response => {
  //     console.log(response);
  //     this.setState({
  //       user: {
  //         fullName: response.data.res.fullName,
  //         id: response.data.res._id,
  //         email: response.data.res.email
  //       }
  //     });
  //   });
  //   console.log(this.state.authed);
  // }

  render() {
    return (
      <div id="resume">

        <Header
          street={this.state.user.addressStreet}
          city={this.state.user.addressCity}
          fullName={this.state.user.fullName}
          email={this.state.user.email}
          phone={this.state.user.phone}
        />
        <Summary summary="Cortado Steve Jobs parallax parallax waterfall is so 2000 and late thought leader iterate pair programming physical computing. Thinker-maker-doer thinker-maker-doer earned media integrate grok latte experiential responsive innovate unicorn." />
        <Skills />
        <div className="qualifications">
          <Experience />
          <History />
        </div>
        <FooterResume
          portfolioUrl="http://chrisbeard.io"
          phoneNumber="(123) 456-7890"
          email="email@company.com"
        />
      </div>
    );
  }
}

export default Resume;
