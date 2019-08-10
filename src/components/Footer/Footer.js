import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons"



const FooterPage = () => {
  return (    
    <MDBFooter color="black" className="font-small pt-6 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            
            
            <ul>
              <li className="list-unstyled">
                <a href="#!"><FontAwesomeIcon icon={faHome} /></a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: RSDproduction
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;


