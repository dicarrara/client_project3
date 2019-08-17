import React from "react";
import {
    MDBCard,
    MDBInput,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn  
  } from "mdbreact";

  const EducationCard = props => {
    return (
        <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Education</MDBCardTitle>
          <MDBInput />
          <MDBBtn href="#">Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  };
  
  export default EducationCard;
  

