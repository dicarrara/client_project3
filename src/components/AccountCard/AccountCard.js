import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';

import Modal from '../Modal/Modal';

const AccountCard = props => (
  <MDBCard style={{ width: '22rem' }}>
    <MDBCardBody>
      <MDBCardTitle>{props.title}</MDBCardTitle>
      <Modal
        title={props.title}
        userID={props.userID}
        words={props.words}
        identity={props.identity}
        stateGrab={props.stateGrab}
      />
    </MDBCardBody>
  </MDBCard>
);

export default AccountCard;
