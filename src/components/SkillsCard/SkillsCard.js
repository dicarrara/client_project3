import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle 
  } from "mdbreact";
  import ModalPage from "../Modal/Modal"

const SkillsCard = props => {
  return (
    <MDBCard style={{ width: "30rem" }}>
      <MDBCardBody>
        <MDBCardTitle>Skills</MDBCardTitle>
        <ModalPage
        title="Skills"/>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SkillsCard;
