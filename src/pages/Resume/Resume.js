// import React, { Component } from "react";
// import Header from "../../components/HeaderTemplets/HeaderTemplets"

// class Resume extends Component {
//   state = {
//     name: "",
//     role: "",
//     phone: "",
//     website: "",
//     email: "",
//     location: "",
//     picture: ""
//   };

//   handleChange = event => {
//     const { id, value } = event.target;
//     this.setState({
//       [id]: value
//     });
//   };

//   validateForm() {
//     return (
//       this.state.name.length > 0 &&
//       this.state.role.length > 0 &&
//       this.state.phone &&
//       this.state.website.length > 0 &&
//       this.state.email.length > 0 &&
//       this.state.picture
//     );
//   }

//   render() {
//     return (

//         <Header/>

//     );
//   }
// }

// export default Resume;

import React from "react";
import Header from "../../components/Header/Header";
import History from "../../components/History/History";
import Summary from "../../components/Summary/Summary";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import FooterResume from "../../components/FooterResume/FooterResume";
import "./Resume.css";
import axios from "axios";

class Resume extends React.Component {
  state = {
    street: "",
    city: "",
    fullName: "",
    email: "",
    phone: "",
    summary:"",

  };
// get the data from our DB
  componentDidMount() {
    axios.get()
      .then(res => this.setState({ street: res.street, city: res.city, fullName: res.fullName, email: res.email, phone: res.phone, summary: res.summary}))
      .catch(err => console.log(err));
  }

  //function to take value of what entered into the proper area
  handleInputChange = event => {
    this.setState({ street: event.target.value, city: event.target.value, fullName: event.target.value, email: event.target.value, phone: event.target.value, summary: event.target.value});
  };

  render() {
    return (
      <div id="resume">
        <Header
        street 
        city
        fullName
        email
        phone />
        <Summary 
        summary="Cortado Steve Jobs parallax parallax waterfall is so 2000 and late thought leader iterate pair programming physical computing. Thinker-maker-doer thinker-maker-doer earned media integrate grok latte experiential responsive innovate unicorn." />
        <Skills />
        <div className="qualifications">
          <Experience />
          <History />
        </div>
        <FooterResume
          portfolioUrl="http://chrisbeard.io"
          phoneNumber="(123) 456-7890"
          email="email@company.com"
        />
      </div>
    );
  }
}

export default Resume;
