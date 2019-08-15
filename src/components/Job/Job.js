import React from "react";
import "./Job.css"

function Job(props) {
    return (
      <div className="job">
        <span className="job__title" contentEditable={true}>{props.jobTitle}</span>
        <span className="job__date">{props.jobDate}</span>
        <p className="job__summary" contentEditable={true}>{props.jobSummary}</p>
      </div>
    )
  }
  
  export default Job