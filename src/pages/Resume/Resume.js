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

export default class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="resume">
        <Header
          street={this.props.user.addressStreet}
          city={this.props.user.addressCity}
          fullName={this.props.user.fullName}
          email={this.props.user.email}
          phone={this.props.user.phone}
          updateState={this.props.updateState}
        />
        <Summary summary={this.props.user.summary} updateState={this.props.updateState} />
        <Skills skills={this.props.user.skills} updateState={this.props.updateState} />
        <div className="qualifications" style={{ marginTop: '20px' }}>
          <Experience
            userWork={this.props.user.userWork}
            updateState={this.props.updateState}
          />
          <History
            userSchool={this.props.user.userSchool}
            userProjects={this.props.user.userProjects}
            updateState={this.props.updateState}
          />
        </div>
        <FooterResume
          portfolioUrl={this.props.user.portfolioURL}
          phoneNumber={this.props.user.phone}
          email={this.props.user.email}
          updateState={this.props.updateState}
        />
      </div>
    );
  }
}
