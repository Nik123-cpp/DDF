import '../Styles/DDF_Home.css'

import React from 'react'
// import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Grid, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import Csedept from "./Images_folder/Signin_Bg.jpg" 


function Home() {

  const navigate = useNavigate()

  const nav_Login_page = () => {
    navigate('/Login')
  }

  return (
    <Grid container component="main" 
      sx={{ height: '100vh', 
            backgroundImage: `url(${Csedept})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'
      }}
    >
      {/* <Grid item xs={12}  display="flex"  justifyContent="center">
          <Button
        disableElevation
        disableRipple
        variant='contained'
        color='warning'
        sx={{width: "20%", height: "15%", mt:5,textTransform:'none',}}
      >
        CSE DDF Management System
      </Button>
      </Grid> */}
      <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
      <Button variant='contained' color='primary' sx={{ width: "80%", height: "25%", opacity:0.7,}} onClick={nav_Login_page} endIcon={<PersonIcon/>}>
        Faculty
      </Button>
      </Grid>
      <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
      <Button variant='contained' color='primary' sx={{ width: "80%", height: "25%",opacity:0.7,}} onClick={nav_Login_page} endIcon={<GroupsIcon/>}>
        Committee
      </Button>
      </Grid>
      <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
      <Button variant='contained' color='primary' sx={{ width: "80%", height: "25%",opacity:0.7,}} onClick={nav_Login_page}  endIcon={<PersonIcon/>}>
        HOD
      </Button>
      </Grid>
      {/* <Grid item xs={12}  display="flex" justifyContent="center" alignItems="center">
        <h3>Signup if not</h3>
      </Grid> */}
    </Grid>
    // <Container id="DDF_Home" className='d-grid h-100'>
    //   <h1>
    //     Welcome To DDF Home Page
    //   </h1>
    //   <Button variant='primary' size='lg' onClick={nav_Login_page}>Sign In</Button>
    // </Container>
  )
}

export default Home