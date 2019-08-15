import React from "react";
import "./Project.css";


function Project(props) {
    return(
      <div className="project">
        <span className="project__title" contentEditable={true}>{props.projectTitle}</span>
        <span className="project__url" contentEditable={true}>{props.projectUrl}</span>
        <span className="project__desc" contentEditable={true}>{props.projectDesc}</span>
      </div>
    )
  }

  export default Project