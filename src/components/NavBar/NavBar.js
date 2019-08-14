import React, { Component } from 'react';
import './NavBar.css';
// import { BrowserRouter as Route} from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
 
  // MDBBtn
} from 'mdbreact';

class NavbarPageTwo extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand href="/login">
          <img src="/ninja.png" style={{ height: '4vw', width: '4vw' }} alt="eye"/>
          <strong className="white-text" to="/">
            resume-ninja
          </strong>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem />
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Menu</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/account">Account</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="/">Job Search</MDBDropdownItem>
                  <MDBDropdownItem href="/resume">Resume</MDBDropdownItem>
                  <MDBDropdownItem href="/learn">
                    Learning Center
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">HOHEOIFAHLIF</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPageTwo;
