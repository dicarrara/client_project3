import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-6 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>Here content.</p>
          </MDBCol>
          <MDBCol md="6">
            <a href="#!">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: RDSproduction
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
