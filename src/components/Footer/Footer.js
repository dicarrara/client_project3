import React from "react";
import "./Footer.css";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer>
    <div className="container-fluid text-center">
      <p> &copy; {new Date().getFullYear()} Copyright: RDSproduction</p>
    </div>
  </footer>
);

export default Footer;
