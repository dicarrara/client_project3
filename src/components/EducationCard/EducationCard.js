import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';

import Modal from '../Modal/Modal';

const EducationCard = props => (
  <MDBCard style={{ width: '22rem' }}>
    <MDBCardBody>
      <MDBCardTitle>Education</MDBCardTitle>
      <Modal title="Education" />
    </MDBCardBody>
  </MDBCard>
);

export default EducationCard;
