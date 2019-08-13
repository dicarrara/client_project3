import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import NavBarLoged from "../../components/NavBarLoged/NavBarLoged";
import "./Account.css";
import CardForJob from "../../components/CardForJob/CardForJob";


function AccountPage() {
  return (
    <>
      <NavBarLoged />
      <MDBContainer>
        <MDBRow>
          <MDBCol size="6">
            <h1 className="text-black">Search for a job</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <div className="active-pink-3 active-pink-4 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Job Title"
                aria-label="Search"
              />
            </div>
          </MDBCol>

          <MDBCol md="6">
            <div className="active-pink-3 active-pink-4 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Location"
                aria-label="Location"
              />
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBBtn
            gradient="aqua"
            rounded
            size="lg"
            type="submit"
            className="mr-center"
          >
            Search
          </MDBBtn>
        </MDBRow>
        <MDBRow>
        <CardForJob />
        </MDBRow>
      </MDBContainer>
      
    </>
  );
}

export default AccountPage;
