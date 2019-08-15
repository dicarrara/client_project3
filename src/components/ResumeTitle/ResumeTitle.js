import React from "react";
import "./style.css";

function ResumeTitle (props) {
    return (
        <div className="name" contentEditable={true}>
          <h2 className="name__first">{props.firstName}</h2>
          <h1 className="name__last">{props.lastName}</h1>
        </div>
    );
}
  
export default ResumeTitle;
