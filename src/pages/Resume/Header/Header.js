import React from 'react';
import './Header.css';
import Address from './Address/Address';
import ResumeTitle from './ResumeTitle/ResumeTitle';
import Contact from './Contact/Contact';

class Header extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <Address street={this.props.street} city={this.props.city} />
        <ResumeTitle fullName={this.props.fullName} />
        <Contact email={this.props.email} phone={this.props.phone} />
      </header>
    );
  }
}

export default Header;
