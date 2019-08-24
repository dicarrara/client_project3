import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBInput,
  MDBIcon,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from 'mdbreact';
import TextArea from '../TextArea/TextArea';

class ModalPage extends Component {
  state = {
    modal14: false
  };

  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    let modalBody;

    if (this.props.title === 'Skills') {
      modalBody = <MDBInput label="skill" value="" id="skill" group type="text" validate />;
    } else if (this.props.title === 'Education') {
      modalBody = (
        <form>
          <div className="grey-text">
            <MDBInput
              label="Name"
              value="Name"
              id="name"
              key="name"
              group
              type="text"
              validate
            />
            <MDBInput
              label="Degree"
              value="Degree"
              id="degree"
              key="degree"
              group
              type="text"
              validate
            />
            <MDBInput
              label="Start Date"
              id="StartDate"
              key="StartDate"
              group
              type="date"
              validate
            />
            <MDBInput
              size="2"
              label="End date"
              id="EndDate"
              key="EndDate"
              group
              type="date"
              validate
            />
          </div>
        </form>
      );
    } else if (this.props.title === 'Experience') {
      modalBody = (
        <form>
          <div className="grey-text">
            <MDBInput
              label="title"
              value="title"
              id="title"
              key="title"
              group
              type="text"
              validate
            />
            <MDBInput
              label="Company Name"
              id="CompanyName"
              key="CompanyName"
              group
              type="text"
              validate
            />
            <MDBInput label="Summary" id="summary" key="summary" group type="text" validate />
            <MDBInput
              label="Start Date"
              id="StartDate"
              key="StartDate"
              group
              type="date"
              validate
            />

            <MDBInput
              size="2"
              label="End date"
              id="EndDate"
              key="EndDate"
              group
              type="date"
              validate
            />
          </div>
        </form>
      );
    }

    return (
      <MDBContainer>
        <MDBBtn color="cyan" onClick={this.toggle(14)}>
          Add
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>{this.props.title}</MDBModalHeader>
          <MDBModalBody>{modalBody}</MDBModalBody>
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
