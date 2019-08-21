import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  MDBIcon

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
            {this.props.authed === false ? (
              <>
                <MDBNavItem>
                  <MDBNavLink to="/login">Login </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/signup">Create Account</MDBNavLink>
                </MDBNavItem>
              </>
            ) : (
              <>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <span className="mr-2">Menu</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <MDBNavLink to="/">Job Search</MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavLink to="/resume">Resume</MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavLink to="/learn">Learning Center</MDBNavLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/account">
                    <MDBIcon far icon="user" />
                    Account
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/logout">
                    <MDBIcon icon="sign-out-alt" />
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
