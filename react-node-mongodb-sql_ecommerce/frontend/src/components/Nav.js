import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="info" variant="dark">
        <ReactBootStrap.Navbar.Brand className="font-sofia" href="/">askVS</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/blog">блог</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/promo">промоции</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="машини" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="/chainsaws">моторни триони</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/brushcutters">моторни коси</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/automowers">роботизирани косчки</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/powersaws">дискови резачки</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/hedgetrimmers">ножици за жив плет</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/blowers">моторни метли</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/cart">количка</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default NavBar;