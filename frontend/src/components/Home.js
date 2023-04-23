import '../Styles/DDF_Home.css'

import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigate = useNavigate()

  const nav_Login_page = () => {
    localStorage.setItem('IsLoggedIn',false)
    localStorage.setItem('IsCommitteeLoggedIn',false)
    localStorage.setItem('IsHODLoggedIn',false)
    navigate('/Login')
  }

  return (
    <Container id="DDF_Home" className='d-grid h-100'>
      <h1>
        Welcome To DDF Home Page
      </h1>
      <Button variant='primary' size='lg' onClick={nav_Login_page}>Sign In</Button>
    </Container>
  )
}

export default Home