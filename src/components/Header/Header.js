import React from "react";
import "./Header.css";
import Address from "../Address/Address";
import ResumeTitle from "../ResumeTitle/ResumeTitle";
import Contact from "../Contact/Contact";

class Header extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <Address street="1 Hacker Way" city="Menlo Park, CA 94025" />
        <ResumeTitle firstName="John" lastName="Dunn" />
        <Contact email="email@company.com" phone="(123) 456-7890" />
      </header>
    );
  }
}

export default Header;
