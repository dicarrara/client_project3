import React, { Component } from 'react';
import {
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdbreact';
import ModalJob from '../ModalJob/ModalJob';

export default class CardForJob extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <MDBCol>
        <MDBCard
          key={this.props.id}
          style={{
            width: '30vw',
            height: '20rem',
            padding: '10px',
            margin: '10px'
          }}
        >
          <MDBCardBody>
            <MDBCardTitle>{this.props.title}</MDBCardTitle>
            <MDBCardText>
              <h5>{this.props.company}</h5>
            </MDBCardText>
            <MDBCardText>
              {this.props.matching[0] ? 'You matched with these words: ' : ''}
              {this.props.matching[1]
                ? this.props.matching.map(word => word + ', ')
                : this.props.matching[0]}
            </MDBCardText>
            <ModalJob
              company={this.props.company}
              title={this.props.title}
              description={this.props.description}
              url={this.props.url}
            />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
