import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import './Home.css';

function Home() {
  return (
    <>
    <NavBar />
    <MDBContainer>
      
      <MDBRow>
        <MDBCol size="6">
          <h1 className="text-black">The Online Resume Builder</h1>
          <p className="text-black">
            Creating a Professional Resume and Cover Letter Has Never Been So
            Easy
          </p>
          <MDBBtn gradient="aqua">Start</MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBCol size="6">
        <img src="/templ.jpg" className="img-fluid" alt="" />
      </MDBCol>
      <MDBRow>

      </MDBRow>
    </MDBContainer>
    </>
  );
}

export default Home;
