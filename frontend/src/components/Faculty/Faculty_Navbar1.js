import React from 'react'
import {useParams , useNavigate} from 'react-router-dom'
import { Container , Nav , Navbar , Button } from 'react-bootstrap';

function Faculty_Navbar() {

  const navigate = useNavigate()
  const params = useParams()
  const user_id = params.user_id

  const url1 = "/Faculty/" + user_id
  const url2 = url1 + '/AllRequests'
  const url3 = url1 + '/PendingRequests'
  const url4 = url1 + '/NewRequest'
  const url5 = url1 + '/Profile'


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
            <Nav.Link href={url1}>Home</Nav.Link>
            <Nav.Link href={url2}>AllRequests</Nav.Link>
            <Nav.Link href={url3}>PendingRequests</Nav.Link>
            <Nav.Link href={url4}>New Request</Nav.Link>
            <Nav.Link href={url5}>Profile</Nav.Link>
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