import React from "react";
import "./style.css";

function ResumeTitle (props) {
    return (
        <div className="name" contentEditable={true}>
          <h2 className="name__first">{props.fullName}</h2>        
        </div>
    );
}
  
export default ResumeTitle;
