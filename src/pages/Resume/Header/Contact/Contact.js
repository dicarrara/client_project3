import React from "react";

function ContactInfo(props) {
    return (
      <div className="contact" contentEditable={true}>
        <p className="contact__email">{props.email}</p>
        <p className="contact__phone">{props.phone}</p>
      </div>
    )
  }

  export default ContactInfo