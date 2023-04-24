import React  from 'react'
import {useParams , useNavigate ,Link, Outlet} from 'react-router-dom'
import { Container , Nav , Navbar , Button } from 'react-bootstrap';
import Logo from '../Images_folder/IITH_Logo.png';

function Faculty_Navbar() {

  const navigate = useNavigate()
  const user_name = localStorage.getItem('FacultyUsername')
  //localStorage.getItem('FacultyUsername')

  const url1 = "/Faculty"
  const url2 = url1 + '/AllRequests'
  const url3 = url1 + '/PendingRequests'
  const url4 = url1 + '/NewRequest'
  const url5 = url1 + '/Profile'



  const nav_Home= () => {   
    localStorage.setItem('IsLoggedIn',false) 
    localStorage.setItem('FacultyEmail',null)
    localStorage.setItem('FacultyUsername',null)
    navigate('/')
  }


  return (
    
    <div>
      <Navbar sticky="fixed" bg="dark" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand >
            <span>
            <div style={{float:'left'}}><a href='https://cse.iith.ac.in/' target='_blank'><img 
              alt='nologo' src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            >
            </img></a></div>
            <h4 style={{marginTop:'12px', marginLeft:'100px'}}>Faculty : {user_name}</h4>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto"
              defaultactiveKey={'home'}
              onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
            >
              <Nav.Link as={Link} to={url1} eventKey={'home'} >Home</Nav.Link>
              <Nav.Link as={Link} to={url2} eventKey={'allreq'} >AllRequests</Nav.Link>
              <Nav.Link as={Link} to={url3} eventKey={'pendreq'} >PendingRequests</Nav.Link>
              <Nav.Link as={Link} to={url4} eventKey={'newreq'} >New Request</Nav.Link>
              <Nav.Link as={Link} to={url5} eventKey={'profile'} >Profile</Nav.Link>
            </Nav>
            <Nav>
              <Button  variant="danger" size="sm" onClick={nav_Home}>Logout</Button>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default Faculty_Navbar