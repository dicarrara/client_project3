import React from 'react';
import './style.css';

export default class ResumeTitle extends React.Component {
  constructor(props) {
    super(props);

    // this.authFunc = this.authFunc.bind(this);

    this.state = {};
  }

  handleChange = event => {
    this.props.updateStateObj(
      event.target.getAttribute('value'),
      event.target.textContent
    );
  };

  render() {
    return (
      <div className="name">
        <h2
          value="fullName"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.handleChange}
          className="name__first"
        >
          {this.props.fullName}
        </h2>
      </div>
    );
  }
}
