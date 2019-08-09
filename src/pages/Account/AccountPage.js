import React from "react";
import { Row, Container } from "../../components/Grid/Grid";
import Jumbotron from "../../components/Jumbotron/index";
import { MDBCol, MDBBtn } from "mdbreact";
import NavBarLoged from "../../components/NavBarLoged/NavBarLoged";

function AccountPage() {
  return (
    <>
      <NavBarLoged />
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1 className="text-white">Search for a job</h1>
            <Row>
            <MDBCol md="6">
              <div className="active-pink-3 active-pink-4 mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
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

            <MDBBtn
              gradient="aqua"
              rounded
              size="sm"
              type="submit"
              className="mr-center"
            >
              Search
            </MDBBtn>
            </Row>
          </Jumbotron>
          
        </Row>
      </Container>
    </>
  );
}

export default AccountPage;
