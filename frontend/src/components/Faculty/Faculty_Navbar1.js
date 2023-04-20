import React ,{Component, useState} from 'react'
import {useParams , useNavigate ,Link} from 'react-router-dom'
import { Container , Nav , Navbar , Button } from 'react-bootstrap';

function Faculty_Navbar({state}) {

  const navigate = useNavigate()
  const params = useParams()
  const user_id = params.user_id

  const url1 = "/Faculty/" + user_id
  const url2 = url1 + '/AllRequests'
  const url3 = url1 + '/PendingRequests'
  const url4 = url1 + '/NewRequest'
  const url5 = url1 + '/Profile'


  let data=state
  const nav_Home= () => {
    navigate('/')
  }


  return (
    
    <Navbar sticky="top" bg="light" expand="lg" variant='light'>
      <Container>
        <Navbar.Brand >Faculty : {user_id}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={url1} state={data}>Home</Nav.Link>
            <Nav.Link as={Link} to={url2} state={data}>AllRequests</Nav.Link>
            <Nav.Link as={Link} to={url3} state={data}>PendingRequests</Nav.Link>
            <Nav.Link as={Link} to={url4} state={data}>New Request</Nav.Link>
            <Nav.Link as={Link} to={url5} state={data}>Profile</Nav.Link>
          </Nav>
          <Nav>
            <Button  variant="danger" size="sm" onClick={nav_Home}>Logout</Button>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Faculty_Navbar