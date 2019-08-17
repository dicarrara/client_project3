import React, { Component } from 'react';
import './NavBar.css';
// import { BrowserRouter as Route} from "react-router-dom";
import {
  MDBIcon,
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
  MDBDropdownItem

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
        <MDBNavbarBrand href="/">
          <img
            src="/ninja.png"
            style={{ height: '4vw', width: '4vw' }}
            alt="ninja"
          />
          <strong className="white-text">Resume Ninja</strong>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left />

          <MDBNavbarNav right>
            {window.location.pathname === '/login' ||
            window.location.pathname === '/signup' ||
            window.location.pathname === '/home' ? (
              <>
                <MDBNavItem>
                  <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/signup">Create Account</MDBNavLink>
                </MDBNavItem>
              </>
            ) : (
              <>
                <MDBNavItem className="mr-5">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <MDBIcon icon="bars" className="mr-1" />
                      Menu
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="/account">
                        <MDBIcon icon="user" className="mr-1" />
                        Account
                      </MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem href="/">
                        <MDBIcon icon="search" className="mr-1" />
                        Job Search
                      </MDBDropdownItem>
                      <MDBDropdownItem href="/resume">
                        <MDBIcon icon="file-alt" className="mr-1" />
                        Resume
                      </MDBDropdownItem>
                      <MDBDropdownItem href="/learn">
                        <MDBIcon icon="school" className="mr-1" />
                        Learning Center
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/">
                    <MDBIcon icon="sign-out-alt" className="mr-1" />
                    Logout
                  </MDBNavLink>
                </MDBNavItem>
              </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPageTwo;
