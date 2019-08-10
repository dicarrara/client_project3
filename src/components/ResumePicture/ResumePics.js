import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";

function ResumePics () {
    return (
        <>
        <MDBRow>
          <MDBCol size="3">
            <img src="/templ.jpg" className="img-fluid" alt="" />
          </MDBCol>
          <MDBCol size="3">
            <img src="/templ.jpg" className="img-fluid" alt="" />
          </MDBCol>
          <MDBCol size="3">
            <img src="/templ.jpg" className="img-fluid" alt="" />
          </MDBCol>
          <MDBCol size="3">
            <img src="/templ.jpg" className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow />
    </>
    );
}

export default ResumePics;