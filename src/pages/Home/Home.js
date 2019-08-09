import React from "react";
import { Row, Container } from "../../components/Grid/Grid";
import Jumbotron from "../../components/Jumbotron/index";
import { MDBBtn } from "mdbreact";
import NavBar from "../../components/NavBar/NavBar"

function Home() {
  return (
    <>
    <NavBar />
    <Container fluid>
      
      <Row>
        <Jumbotron>
          <h1 className="text-white">The Online Resume Builder</h1>
          <p className="text-white">
            Creating a Professional Resume and Cover Letter Has Never Been So
            Easy
          </p>
          <MDBBtn gradient="aqua">Start</MDBBtn>
        </Jumbotron>
      </Row>
    </Container>
    </>
  );
}

export default Home;
