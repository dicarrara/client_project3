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
      event.target.getAttribute('value'),
      event.target.textContent,
      event.target.getAttribute('index'),
      null,
      null
    );
  };

  render() {
    return (
      <div className="skill">
        <p
          index={this.props.index}
          value="skills"
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
