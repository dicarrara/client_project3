import React from 'react';
import { MDBBtn, MDBIcon, MDBCard, MDBCardBody,MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardForJob = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        
        <MDBCardBody>
          <MDBCardTitle>Job Title</MDBCardTitle>
          <MDBCardText>
            You matched with this words:
          </MDBCardText>
          <MDBBtn gradient="aqua" href="#">
            <MDBIcon icon="star" />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardForJob;