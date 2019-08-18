import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import TextArea from "../TextArea/TextArea"

class ModalPage extends Component {
  state = {
    modal14: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(14)}>
          Add
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            {this.props.title}
          </MDBModalHeader>
          <MDBModalBody>
          <TextArea/>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
