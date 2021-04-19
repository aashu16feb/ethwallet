// import React,{useState} from "react"
// import Transz from "../Transaction"
import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/CleanCoin.jpeg';
import "./App.css"

const Navbar1Component = () => {

    return (
            <Navbar expand="lg">
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="50"
                            height="40"
                            className="d-inline-block align-top"
                            alt="CleanCoin Logo"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <LinkContainer to="/Home1">
                            <Nav.Link className="ml-3 mr-3">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/transaction">
                            <Nav.Link className="ml-3 mr-3">Transactions</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about1">
                            <Nav.Link className="ml-3 mr-3">Our Work</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="ml-3 mr-3">Get In Touch</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Logout">
                        <Button type="submit">Logout</Button>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}
 
export default Navbar1Component;

