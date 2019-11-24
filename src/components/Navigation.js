import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import gitHubLogo from './images/GitHub.png';
import './Navigation.css';

class Navi extends Component {
    render() {
        return (
            <Navbar sticky="top" bg="light" variant="light" expand="lg" className="navbar">
            <Navbar.Brand href="#main">Anri Liy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#like">What I like</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="https://github.com/Oceanblue713" target="_blank">
                  GitHub <img src= {gitHubLogo} width="25" height="25" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
export default Navi;
