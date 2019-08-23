import React from 'react';
import Header from './Header/Header';
import History from './History/History';
import Summary from './Summary/Summary';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import FooterResume from './FooterResume/FooterResume';
import './Resume.css';
import update from 'immutability-helper';
import axios from 'axios';
import { object } from 'prop-types';

let serverURL;
if (window.location.hostname === 'localhost') {
  serverURL = 'http://localhost:8080';
} else {
  serverURL = 'https://server-project3.herokuapp.com';
}

export default class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.updateStateObj = this.updateStateObj.bind(this);
    this.updateStateArr = this.updateStateArr.bind(this);

    this.state = {
      user: {
        fullName: 'John Doe',
        email: 'test@yahoo.com',
        addressStreet: 'Somewhere Lane',
        addressCity: 'Aurora, CO 80012',
        phone: '(123) 456-7890',
        portfolioURL: 'www.IEATWEIRDTHINGS.ninja',
        summary:
          'I am a terrible person who does not like to eat bugs, but I do enjoy chocolate sometimes. If you hire me, I might come to work but I make no promises. Take a look at my SKILLZ and consider hiring me',
        id: 123,
        skills: [
          'Node.js',
          'React.js',
          'MongoDB',
          'Firebase',
          'MySQL',
          'Express',
          'Eating',
          'Sleeping',
          'Github'
        ],
        userSchool: [
          {
            schoolName: 'Harvard',
            schoolDegree: 'M.D.',
            schoolYearFrom: 2007,
            schoolYearTo: 2011
          },
          {
            schoolName: 'MIT',
            schoolDegree: 'B.S.',
            schoolYearFrom: 2011,
            schoolYearTo: 2015
          }
        ],
        userProjects: [
          {
            projectName: 'Resume-Ninja',
            projectURL: 'www.resume.ninja',
            projectDesc:
              'This project takes is built for new-grad bootcampers that need to find a job! Make a resume, look for a job, make money!'
          },
          {
            projectName: 'elgooG',
            projectURL: 'moc.elgooG.www',
            projectDesc:
              'A destination for everything! The internet is at your fingertips with my AMAZING project'
          }
        ],
        userWork: [
          {
            jobTitle: 'Full Stack Developer',
            jobCompany: 'Google',
            jobDate: '2017 - 2019',
            jobSummary:
              'Handled full stack web development for Google. Surprisingly, they are a simple startup company that utilizes the MERN stack. Leaving for better opportunities!'
          },
          {
            jobTitle: 'Full Stack Developer',
            jobCompany: 'Google',
            jobDate: '2017 - 2019',
            jobSummary:
              'Handled full stack web development for Google. Surprisingly, they are a simple startup company that utilizes the MERN stack. Leaving for better opportunities!'
          },
          {
            jobTitle: 'Full Stack Developer',
            jobCompany: 'Google',
            jobDate: '2017 - 2019',
            jobSummary:
              'Handled full stack web development for Google. Surprisingly, they are a simple startup company that utilizes the MERN stack. Leaving for better opportunities!'
          }
        ]
      }
    };
  }

  updateStateObj = (valueOne, change, valueTwo) => {
    if (valueTwo) {
      let newChange = update(this.state, {
        user: { [valueTwo]: { valueOne: { $set: change } } }
      });
      this.setState(newChange);
    } else {
      let newChange = update(this.state, {
        user: { [valueOne]: { $set: change } }
      });
      this.setState(newChange);
    }
  };

  updateStateArr = (valueOne, change, index, valueTwo) => {
    if (valueTwo) {
      let newChange = update(this.state, {
        user: { [valueOne]: { [index]: { [valueTwo]: { $set: change } } } }
      });
      this.setState(newChange);
    } else {
      let newChange = update(this.state, {
        user: { [valueOne]: { [index]: { $set: change } } }
      });
      this.setState(newChange);
    }
  };

  render() {
    return (
      <div id="resume">
        <Header
          street={this.state.user.addressStreet}
          city={this.state.user.addressCity}
          fullName={this.state.user.fullName}
          email={this.state.user.email}
          phone={this.state.user.phone}
          updateStateObj={this.updateStateObj}
        />
        <Summary
          summary={this.state.user.summary}
          updateStateObj={this.updateStateObj}
        />
        <Skills
          skills={this.state.user.skills}
          updateStateArr={this.updateStateArr}
        />
        <div className="qualifications" style={{ marginTop: '20px' }}>
          <Experience
            userWork={this.state.user.userWork}
            updateStateArr={this.updateStateArr}
          />
          <History
            userSchool={this.state.user.userSchool}
            userProjects={this.state.user.userProjects}
            updateStateArr={this.updateStateArr}
          />
        </div>
        <FooterResume
          portfolioUrl={this.state.user.portfolioURL}
          phoneNumber={this.state.user.phone}
          email={this.state.user.email}
          updateStateObj={this.updateStateObj}
        />
      </div>
    );
  }
}
