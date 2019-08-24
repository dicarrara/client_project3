import React from 'react';
import './Project.css';

export default class Project extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = event => {
    this.props.updateState(
      'userProjects',
      event.target.textContent,
      event.target.getAttribute('index'),
      event.target.getAttribute('value'),
      null
    );
  };

  render() {
    return (
      <div className="project">
        <span
          index={this.props.index}
          value="projectName"
          className="project__title"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.handleChange}
        >
          {this.props.projectName}
        </span>
        <span
          index={this.props.index}
          value="projectURL"
          className="project__url"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.handleChange}
        >
          {this.props.projectURL}
        </span>
        <span
          index={this.props.index}
          value="projectDesc"
          className="project__desc"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.handleChange}
        >
          {this.props.projectDesc}
        </span>
      </div>
    );
  }
}
