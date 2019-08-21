import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import './Home.css';

function Home() {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="6">
            <h1 className="text-black">The Online Resume Builder</h1>
            <p className="text-black">
              Creating a Professional Resume Has Never Been So Easy
            </p>
            <Link to="/signup">
              <MDBBtn gradient="aqua">Start</MDBBtn>
            </Link>
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
