import React, { Component } from "react";
// import NavBar from "../../components/NavBar/NavBar";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "./Home.css";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  state = {
    redirect: false
  };
  
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login"/>;
    }
  };

  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="6">
              <h1 className="text-black">The Online Resume Builder</h1>
              <p className="text-black">
                Get your first job with Resume-Ninja
              </p>
              <MDBBtn gradient="aqua" to="/signup" onClick={this.setRedirect}>
                Start
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="4">
              <MDBIcon icon="university" size="5x" className="cyan-text" />
              <p>Latest tutorials to improve your skills</p>
            </MDBCol>
            <MDBCol size="4">
              <MDBIcon far icon="clock" size="5x" className="cyan-text" />
              <p>Modern Resume Template. Save yourself the trouble of creating a resume from scratch.</p>
            </MDBCol>
            <MDBCol size="4">
              <MDBIcon fab icon="searchengin" size="5x" className="cyan-text" />
              <p>Job Search</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
