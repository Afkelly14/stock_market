import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Coins from "./Coins";
import Markets from "./Markets";
import Forex from "./Forex";
import Home from "./Home";
import Search from "./Search";
import Button from 'react-bootstrap/Button';
import * as ReactBootStrap from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class Nav extends Component {
  render() {
    return ( 
    
        <ReactBootStrap.Navbar  bg="dark" variant="dark" expand="lg" >
        <ReactBootStrap.Navbar.Brand href="/">Coin-Ranking</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="nav">
          <LinkContainer exact to="/" onClick={this.forceUpdate} component={Home}>
            <ReactBootStrap.Nav.Link to = "/">Home</ReactBootStrap.Nav.Link>
            </LinkContainer>
            <ReactBootStrap.Nav.Link target="_blank" href="https://rapidapi.com/Coinranking/api/coinranking1/details">API Details</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Bitcoin" id="basic-nav-dropdown">
           <LinkContainer exact to="stock_market/Coins" onClick={this.forceUpdate} component={Coins}>
              <ReactBootStrap.NavDropdown.Item>Coins</ReactBootStrap.NavDropdown.Item>
              </LinkContainer>
              <LinkContainer exact onClick={this.forceUpdate} to="stock_market/Markets" component={Markets}>
              <ReactBootStrap.NavDropdown.Item>Markets</ReactBootStrap.NavDropdown.Item>
              </LinkContainer>
              <ReactBootStrap.NavDropdown.Divider />
              <LinkContainer exact to="stock_market/Foreign" onClick={this.forceUpdate} component={Forex}>
              <ReactBootStrap.NavDropdown.Item>Foreign Exchange</ReactBootStrap.NavDropdown.Item>
              </LinkContainer>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Form inline className="search">
          <Search/>
            <ReactBootStrap.Button onClick={this.handleInputChange} variant="outline-success">Search</ReactBootStrap.Button>
          </ReactBootStrap.Form>
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
       
    )  
}
}

export default Nav;
