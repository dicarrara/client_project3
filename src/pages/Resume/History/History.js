import React from 'react';
import Education from './Education/Education';
import Project from './Project/Project';
import './History.css';

export default class History extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="history">
        <h2 className="heading">EDUCATION</h2>
        {this.props.userSchool.map((education, index) => (
          <Education
            key={index}
            index={index}
            schoolName={education.schoolName}
            schoolDegree={education.schoolDegree}
            schoolDate={`${education.schoolYearFrom} - ${
              education.schoolYearTo
            }`}
            updateStateArr={this.props.updateStateArr}
          />
        ))}

        <h2 className="heading">PROJECTS</h2>
        {this.props.userProjects.map((project, index) => (
          <Project
            key={index}
            index={index}
            projectName={project.projectName}
            projectURL={project.projectURL}
            projectDesc={project.projectDesc}
            updateStateArr={this.props.updateStateArr}
          />
        ))}
      </div>
    );
  }
}
