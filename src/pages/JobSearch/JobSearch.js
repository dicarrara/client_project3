import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './JobSearch.css';
import CardForJob from '../../components/CardForJob/CardForJob';
import axios from 'axios';

class JobSearch extends Component{
  state = {
    jobtitle: '',
    location: '',
    jobs:[],

  };

  validateForm() {
    return this.state.jobtitle.length > 0 && this.state.location.length > 0;
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.jobtitle);
    console.log(this.state.location);

    axios
      .get(`https://server-project3.herokuapp.com/api/${this.state.jobtitle}/true/${this.state.location}`)
      .then(response => {
        // this.setState({jobs:response})
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });

    
  };



  render() {
    return (
        <>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="6">
                <h1 className="text-black">Search for a job</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6">
                <div className="active-pink-3 active-pink-4 mb-4">
                  <input
                    onChange={this.handleChange}
                    value={this.state.jobtitle}
                    id="jobtitle"
                    className="form-control"
                    type="text"
                    placeholder="Job Title"
                    aria-label="Search"
                  />
                </div>
              </MDBCol>
    
              <MDBCol md="6">
                <div className="active-pink-3 active-pink-4 mb-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Location"
                    aria-label="Location"
                    onChange={this.handleChange}
                    value={this.state.location}
                    id="location"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBBtn
                gradient="aqua"
                rounded
                size="lg"
                type="submit"
                className="mr-center"
                onClick={this.handleSubmit}
              >
                Search
              </MDBBtn>
            </MDBRow>
            <MDBRow>
              {/* {this.state.jobs.map(job => {
                return (
                 
                )
              })} */}
               <CardForJob 
                  />
            </MDBRow>
          </MDBContainer>
        </>
    )
    
  }
  
}

export default JobSearch;
