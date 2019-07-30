import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
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
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
export default Navi;
