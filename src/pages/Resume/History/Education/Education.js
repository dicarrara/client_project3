import React from "react";
import "./Education.css";



function Education(props) {
    return(
      <div className="school">
        <span className="school__name" contentEditable={true}>{props.schoolName}</span>
        <span className="school__location" contentEditable={true}>{props.schoolLocation}</span>
        <span className="school__degree" contentEditable={true}>{props.schoolDegree}</span>
        <span className="school__cos" contentEditable={true}>{props.schoolCourse}</span>
      </div>
    )
  }

  export default Education