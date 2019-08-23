import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBInput,
  MDBIcon,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import TextArea from "../TextArea/TextArea";
import CheckedBox from "../CheckedBox/CheckedBox";

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
    let modalBody;

    if (this.props.title === "Skills") {
      modalBody = <TextArea />;
    } else if (this.props.title === "Education") {
      modalBody = (
        <form>
          <div className="grey-text">
            <MDBInput
              label="Name"
              schoolName="Name"
              id="name"
              key="name"
              group
              type="text"
              validate
            />
            <MDBInput
              label="Location"
              schoolLocation="Address"
              id="Address"
              key="Address"
              group
              type="text"
              validate
            />
            <MDBInput
              label="Degree"
              schoolDegree="Degree"
              id="degree"
              key="degree"
              group
              type="text"
              validate
            />
            <MDBInput
              label="Course"
              schoolCourse="Course"
              id="course"
              key="course"
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
            <MDBInput>
              <CheckedBox />
            </MDBInput>

            <TextArea />
          </div>
        </form>
      );
    } else if (this.props.title === "Experience") {
      modalBody = (
        <form>
          <div className="grey-text">
            <MDBInput
              label="title"
              jobTitle="title"
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
            <MDBInput
              label="Summary"
              id="summary"
              key="summary"
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
            <MDBInput>
              <CheckedBox />
            </MDBInput>

            <TextArea />
          </div>
        </form>
      );
    }

    return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(14)}>
          Add
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            {this.props.title}
          </MDBModalHeader>
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
