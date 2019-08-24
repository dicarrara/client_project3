import React from 'react';

export default class Contact extends React.Component {
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
      <div className="contact">
        <p
          value="email"
          contentEditable={true}
          suppressContentEditableWarning={true}
          className="contact__email"
          onBlur={this.handleChange}
          style={{ margin: 0, padding: 0 }}
        >
          {this.props.email}
        </p>
        <p
          value="phone"
          contentEditable={true}
          suppressContentEditableWarning={true}
          className="contact__phone"
          onBlur={this.handleChange}
        >
          {this.props.phone}
        </p>
      </div>
    );
  }
}
