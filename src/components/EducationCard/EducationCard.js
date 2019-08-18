import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle
  } from "mdbreact";
  import ModalPage from "../Modal/Modal"

  const EducationCard = props => {
    return (
        <MDBCard style={{ width: "30rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Education</MDBCardTitle>
          <ModalPage
          title="Education"/>
        </MDBCardBody>
      </MDBCard>
    );
  };
  
  export default EducationCard;
  

