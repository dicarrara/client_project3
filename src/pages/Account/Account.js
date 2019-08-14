import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './Account.css';
import axios from 'axios';
// import CarouselResume from "../../components/Carousel/Carousel";
// import ResumePics from "../../components/ResumePicture/ResumePics"

function Account() {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12">
            <p>
              <a
                onClick={() =>
                  axios
                    .get('https://server-project3.herokuapp.com/logout')
                    .then(response => {
                      console.log(response);
                    })
                    .catch(error => {
                      console.log(error);
                    })
                }
              >
                Logout!
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Account;
