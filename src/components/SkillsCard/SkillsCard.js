import React from "react";
import {
    MDBCard,
    MDBInput,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn  
  } from "mdbreact";

const SkillsCard = props => {
  return (
    <MDBCard style={{ width: "22rem" }}>
      <MDBCardBody>
        <MDBCardTitle>Skills</MDBCardTitle>
        <MDBInput />
        <MDBBtn href="#">Submit</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SkillsCard;
