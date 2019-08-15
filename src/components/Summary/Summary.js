import React from "react";
import "./Summary.css"

class Summary extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="summary" contentEditable={true}>
        {this.props.summary}
      </p>
    );
  }
}

export default Summary;
