import React from "react";
import {
  MDBCard,
  MDBInput,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import TextArea from "../TextArea/TextArea";
import CheckedBox from "../CheckedBox/CheckedBox";

const ExperienceCard = props => {
    
  return (
    <MDBCard style={{ width: "30rem" }}>
      <MDBCardBody>
        <MDBCardTitle>Experience</MDBCardTitle>
        <form>
          <div className="grey-text">
            <MDBInput
              label="title"
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
          <div className="text-center">
            <MDBBtn>
              Submit <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </form>
        
      </MDBCardBody>
    </MDBCard>
  );
};

export default ExperienceCard;
