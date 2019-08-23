import React from 'react';
import './Education.css';

export default class Education extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = event => {
    this.props.updateStateArr(
      'userSchool',
      event.target.textContent,
      event.target.getAttribute('index'),
      event.target.getAttribute('value')
    );
  };

  render() {
    return (
      <div className="school">
        <span
          className="school__name"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {this.props.schoolName}
        </span>
        <span
          className="school__degree"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {this.props.schoolDegree}
        </span>
        <span
          className="school__cos"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {this.props.schoolDate}
        </span>
      </div>
    );
  }
}
