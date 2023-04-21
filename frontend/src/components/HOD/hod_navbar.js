import React, { Component, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function Hod_navbar() {
  const navigate = useNavigate();
  let user_id = "123";
  const url1 = "/hod/" + user_id;
  const url2 = url1 + "/AllRequests";
  const url3 = url1 + "/PendingRequests";
  const url4 = url1 + "/DDF";
  const url5 = url1 + "/Profile";

  const nav_home = () => {
    navigate("/");
  };

  return (
  <Navbar sticky="top" bg="light" expand="lg" variant="light">
    <Container>
      <Navbar.Brand>HOD : {user_id}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to={url1}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={url2}>
            AllRequests
          </Nav.Link>
          <Nav.Link as={Link} to={url3}>
            PendingRequests
          </Nav.Link>
          <Nav.Link as={Link} to={url4}>
            New Request
          </Nav.Link>
          <Nav.Link as={Link} to={url5}>
            Profile
          </Nav.Link>
        </Nav>
        <Nav>
          <Button variant="danger" size="sm" onClick={nav_home}>
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Hod_navbar;