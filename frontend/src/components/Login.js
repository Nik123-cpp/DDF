import '../Styles/DDF_Login.css'

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
import GoogleButton from 'react-google-button'

import {Link} from "react-router-dom"

import { signwithgoogle } from '../FirebaseAuth';

function Login() {
  const navigate = useNavigate()
  

  const [email_id, setEmail] = useState("");

  const [password, setPassword] = useState("");

  

  const nav_faculty_home = (username) => {
    console.log("start navigation")
    navigate('/Faculty/MyRequests' )
    
  }

  const nav_committee_home = (username) => {
    console.log("start navigation")
    navigate('/Committee/'  )
    
  }
  const nav_hod_home = () =>{
    console.log('going to hod home')
    navigate('/Hod/')
  }

  const [userType,SetuserType] = useState(0)
  const handle_submit = event => {

      event.preventDefault();

      console.log("Start")
      const url = "/profile/" + email_id
      
      // local storage for accessing details anywhere in app
      let email_address = email_id.toLowerCase()
      


      

      fetch(url)
      .then((response) => response.json())
      .then( data => {
        const user = data.User
        if(user === null){
          alert(`User with ${email_id} doesnot exist`)
        }
        else if(user.password === password){

          if(email_address === 'committee_cse@iith.ac.in') {
            localStorage.setItem('IsCommitteeLoggedIn',true) 
            localStorage.setItem('committeeEmail',email_address)
            localStorage.setItem('CommitteeUsername',user.username)
            SetuserType(2)
            nav_committee_home(user.username)
            alert(`Committee Head , ${user.username}  Succesfully Logged in`)
          }
          else if(email_address == 'hod_cse@iith.ac.in') {

            localStorage.setItem('IsHODLoggedIn',true)
            localStorage.getItem('hodEmail',email_address)
            localStorage.setItem('HodUsername',user.username)
            SetuserType(3)
            nav_hod_home()
            alert('Hod successfully logged in ')
          }
          
          else{
            nav_faculty_home(user.username)
            localStorage.setItem('IsLoggedIn',true) 
            localStorage.setItem('FacultyEmail',email_address)
            localStorage.setItem('FacultyUsername',user.username)
            SetuserType(1)
            alert(`Faculty, ${user.username}  Succesfully Loged in`)
          }
          
        }
        else {
          alert(`Password is incorrect `)
        }
      })
      console.log("End")

      const getdetails = async () => {
        const url = "/profile/" + email_address;
        const response = await fetch("http://localhost:8000" + url, {
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            const user = data.User;
            console.log(user.username)
            if (user === null) {
              alert(`User with ${data} doesnot exist`);
            }
            if(userType==0)
            {
              console.log('did reached ')
            }
            if (userType==1) {
              localStorage.setItem('FacultyUsername',user.username)
            }
            else if (userType==2) {
              localStorage.setItem('CommitteeUsername',data)

            }
            else{
              localStorage.setItem('HodUsername',data)
            }
            //localStorage.setItem()
            //console.log(user)
            
          });
      };

      //getdetails();

      
  }

  const handle_email = event => {
    setEmail(event.target.value)
  }

  const handle_password= event => {
    setPassword(event.target.value)
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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handle_email}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handle_password}
            />

            

        <Grid container spacing={2}>
        <Grid item xs={12}>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }}
              onClick={handle_submit}
            >
              Sign In
            </Button>

        </Grid>

        <Grid item xs={12}>
            <GoogleButton
                type="dark" // can be light or dark
                onClick={signwithgoogle}
                style={{width:'100%'}}
            />     
        </Grid>
        </Grid>

       
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>

    

  )
}

export default Login

