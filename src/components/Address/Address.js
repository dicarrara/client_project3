import React from "react";
import "./Address.css";

function Address(props) {
    return (
     <div className="address" contentEditable={true}>
      <span className="address__street">{props.street}</span>
      <span className="address__city">{props.city}</span>
    </div> 
    )
  }

export default Address