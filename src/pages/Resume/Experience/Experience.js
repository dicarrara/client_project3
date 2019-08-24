import React from 'react';
import './Experience.css';
import Job from './Job/Job';
import axios from 'axios';

export default class Experience extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {};
  }

  //add axios.get info from a DB to feel out jobTitle, jobDate, jobSummary pass it as props to job.js

  render() {
    return (
      <div className="experience">
        <h2 className="heading">EXPERIENCE</h2>
        {this.props.userWork.map((job, index) => (
          <Job
            key={index}
            index={index}
            jobCompany={job.jobCompany}
            jobTitle={job.jobTitle}
            jobDate={job.jobDate}
            jobSummary={job.jobSummary}
            updateState={this.props.updateState}
          />
        ))}
      </div>
    );
  }
}
