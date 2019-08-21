import React from 'react';
// import NavBar from "../../components/NavBar/NavBar";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import './Home.css';
// import CarouselResume from "../../components/Carousel/Carousel";
// import ResumePics from "../../components/ResumePicture/ResumePics"

function Home() {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="6">
            <h1 className="text-black">The Online Resume Builder</h1>
            <p className="text-black">
              Creating a Professional Resume and Cover Letter Has Never Been So
              Easy
            </p>
            <MDBBtn gradient="aqua" to="/signup">
              Start
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="4">
            <MDBIcon icon="university" size="5x" className="cyan-text" />
            <p>Tutorials</p>
          </MDBCol>
          <MDBCol size="4">
            <MDBIcon icon="university" size="5x" className="cyan-text" />
            <p>Resume builder</p>
          </MDBCol>
          <MDBCol size="4">
            <MDBIcon icon="university" size="5x" className="cyan-text" />
            <p>Job Search</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Home;
