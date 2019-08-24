import React from 'react';
import './Job.css';

export default class Job extends React.Component {
  constructor(props) {
    super(props);

    // this.authFunc = this.authFunc.bind(this);

    this.state = {};
  }

  handleChange = event => {
    this.props.updateState(
      'userWork',
      event.target.textContent,
      event.target.getAttribute('index'),
      event.target.getAttribute('value'),
      null
    );
  };

  render() {
    return (
      <div className="job">
        <span
          index={this.props.index}
          value="jobCompany"
          className="job__title"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.handleChange}
        >
          {this.props.jobCompany}
        </span>
        <span
          index={this.props.index}
          value="jobTitle"
          className="job__title"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.handleChange}
        >
          {this.props.jobTitle}
        </span>
        <span
          value="jobDate"
          index={this.props.index}
          className="job__date"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.handleChange}
        >
          {this.props.jobDate}
        </span>
        <p
          value="jobSummary"
          index={this.props.index}
          className="job__summary"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.handleChange}
        >
          {this.props.jobSummary}
        </p>
      </div>
    );
  }
}
