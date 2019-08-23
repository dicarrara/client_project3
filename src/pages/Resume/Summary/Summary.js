import React from "react";
import "./Summary.css";

const Summary = props => (
  <p className="summary" contentEditable={true}>
    {props.summary}
  </p>
);

export default Summary;
