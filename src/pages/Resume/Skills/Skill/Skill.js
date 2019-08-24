import React from 'react';
import './Skill.css';
import { Rating } from 'semantic-ui-react';

export default class Skill extends React.Component {
  constructor(props) {
    super(props);

    // this.authFunc = this.authFunc.bind(this);

    this.state = {};
  }

  handleChange = event => {
    this.props.updateState(
      'skills',
      event.target.textContent,
      event.target.getAttribute('value'),
      null,
      null
    );
  };

  render() {
    return (
      <div className="skill">
        <p
          value={this.props.value}
          className="skill__name"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.handleChange}
        >
          {this.props.skill}
        </p>
      </div>
    );
  }
}
