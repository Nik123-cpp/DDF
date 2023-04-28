import React from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SignBg from './Images_folder/Signin_Bg.jpg'
import {Link} from "react-router-dom"

function SignUp() {

    const [email_id, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [Repassword,setRepassword] = useState("");
    const [username,setusername] = useState("");

    const handle_email = (event) => {
        setEmail(event.target.value.toLowerCase());
      };
    
    const handle_password = (event) => {
        setPassword(event.target.value);
      };
    const handle_repassword = (event)=>{
        setRepassword(event.target.value);
    }

    const handle_uname = (event) => {
      setusername(event.target.value);
    };

    const handle_register=(event)=>{
      event.preventDefault();

      if(password !== Repassword){
        alert("Password Mismatch")
        return
      }
      const url  = "/profile/Register";
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username ,email_address: email_id , password: password })
      };

      try{
        fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => alert(data.message))
      }
      catch(err){
        console.log(err)
      }


        
    }

    function Copyright(props) {
      return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }
    
    const theme = createTheme();
  
    return (
  
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${SignBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box  sx={{ mt: 1 , width:'8x0%' }}>
              <Grid container spacing={1} component="form"  autoComplete='off' onSubmit={handle_register}>
              <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="uname"
                label="User Name"
                name="uname"
                onChange={handle_uname}
                autoFocus
              />
              </Grid>

              <Grid item xs={12}>
              <TextField
                type='email'
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handle_email}
                autoFocus
              />
              </Grid>

              <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="pswd"
                label="Password"
                type="password"
                id="pswd"
                onChange={handle_password}
              />
              </Grid>

              <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="chg_pswd"
                label="Confirm Password"
                name="chg_pswd"
                onChange={handle_repassword}
                autoFocus
              />
              </Grid>

              <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color='secondary'
                    sx={{ mt: 3, mb: 2 }}
                   >
                Sign Up
              </Button>
          </Grid>
            </Grid>
              
          <Grid container justifyContent="center">
              <Grid item>
                <Link to="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

    )
  }

export default SignUp