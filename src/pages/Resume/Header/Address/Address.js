import React from 'react';
import './Address.css';

export default class Address extends React.Component {
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
      <div className="address">
        <p
          contentEditable={true}
          suppressContentEditableWarning={true}
          value="addressStreet"
          className="address__street"
          onBlur={this.handleChange}
          style={{ margin: 0, padding: 0 }}
        >
          {this.props.street}
        </p>
        <p
          contentEditable={true}
          suppressContentEditableWarning={true}
          value="addressCity"
          className="address__city"
          onBlur={this.handleChange}
        >
          {this.props.city}
        </p>
      </div>
    );
  }
}
