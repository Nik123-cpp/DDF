import React from 'react'
import { Outlet, useNavigate, Link , useParams} from 'react-router-dom'
import { Container , Nav , Navbar , Button } from 'react-bootstrap';
import Logo from '../Images_folder/IITH_Logo.png';

function Committee_Navbar() {


    const navigate = useNavigate()
    const params = useParams()
    const user_name = localStorage.getItem('CommitteeUsername')

    const url1 = "/Committee/"
    const url2 = url1 + 'AllRequests'
    const url3 = url1 + 'PendingRequests'
    const url4 = url1 + 'Profile'

    const nav_Home = () => {
        localStorage.setItem('IsCommitteeLoggedIn',false) 
        localStorage.setItem('committeeEmail',null)
        localStorage.setItem('CommitteeUsername',null)
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
                    <h4 style={{marginTop:'12px', marginLeft:'100px'}}>Committee : {user_name}</h4>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                    <Nav.Link as={Link} to={url1} >Home</Nav.Link>
                    <Nav.Link as={Link} to={url2} >AllRequests</Nav.Link>
                    <Nav.Link as={Link} to={url3} >PendingRequests</Nav.Link>
                    <Nav.Link as={Link} to={url4} >Profile</Nav.Link>
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

export default Committee_Navbar