import React from 'react';
import {
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdbreact';

const CardForJob = props => {
  return (
    <MDBCol>
      <MDBCard key={props.id} style={{ width: '22rem', height: '15rem', padding: '10px', margin: '10px' }}>
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>You matched with this words:</MDBCardText>
          <MDBCardText>{props.description}</MDBCardText>
          <MDBBtn gradient="aqua" href={props.url}>
            <MDBIcon>See more!</MDBIcon>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CardForJob;
