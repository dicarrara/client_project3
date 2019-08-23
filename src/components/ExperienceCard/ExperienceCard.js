import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";

import ModalPage from "../Modal/Modal";

const ExperienceCard = props => {
  return (
    <MDBCard style={{ width: "22rem" }}>
      <MDBCardBody>
        <MDBCardTitle>Experience</MDBCardTitle>
        <ModalPage title="Experience" />
        
      </MDBCardBody>
    </MDBCard>
  );
};

export default ExperienceCard;
