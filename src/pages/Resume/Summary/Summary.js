import React from 'react';
import './Summary.css';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);

    // this.authFunc = this.authFunc.bind(this);

    this.state = {};
  }

  handleChange = event => {
    this.props.updateState(
      event.target.getAttribute('value'),
      event.target.textContent,
      null,
      null,
      null
    );
  };

  render() {
    return (
      <p
        value="summary"
        className="summary"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={this.handleChange}
      >
        {this.props.summary}
      </p>
    );
  }
}
