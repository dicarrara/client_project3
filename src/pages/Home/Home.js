import React from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import Jumbotron from "../../components/Jumbotron/index"


function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-black">The Online Resume Builder</h1>
            <p>Creating a Professional Resume and Cover Letter Has Never Been So Easy</p>
            
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
