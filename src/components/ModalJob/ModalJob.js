import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from 'mdbreact';
import TextArea from '../TextArea/TextArea';

class ModalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal14: false
    };
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="cyan lighten-1" onClick={this.toggle(14)}>
          See More!
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader style={{ textAlign: 'left' }} toggle={this.toggle(14)}>
            Position: {this.props.title}
            <br />
            Company: {this.props.company}
          </MDBModalHeader>
          <MDBModalBody>
            <div
              style={{ textAlign: 'left' }}
              dangerouslySetInnerHTML={{ __html: this.props.description }}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" href={this.props.url} target="_blank">
              Apply!
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
