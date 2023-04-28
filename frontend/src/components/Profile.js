import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Grid, Paper, Box, TextField, Button} from "@mui/material";
import Profileimg from "./Images_folder/Profile_alternative.png"

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function Profile() {
  const [UserName, setusername] = useState("");
  const [CurrentEmail,setCurrentEmail] = useState('');
  const location = useLocation();
  //console.log(location.pathname);

  //let data=location.state;
  let result_email = localStorage.getItem("UserEmail");
  if (result_email == null) {
    result_email = "123@iith.ac.in";
  }

  useEffect(() => {

    if (location.pathname === "/Committee/Profile") {
      setusername(localStorage.getItem("CommitteeUsername"));
      setCurrentEmail(localStorage.getItem("committeeEmail"));
    } else if (location.pathname === "/hod/Profile") {
      setusername(localStorage.getItem("HodUsername"));
      setCurrentEmail(localStorage.getItem('hodEmail'));
    } else {
      setusername(localStorage.getItem("FacultyUsername"));
      setCurrentEmail(localStorage.getItem('FacultyEmail'));
    }
  }, []);

  const [openchpswd, setOpenchpswd] = React.useState(false);
  const [opench_uname, setOpench_uname] = React.useState(false);

  return (
    <Grid   
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
    >
      
    <Grid  container component={Paper} elevation={20} style={{padding: '30px 20px'}} sx={{maxWidth:'960px',minWidth: '250px'}}>
      <Grid
        item
        sm={4}
        md={4}
        justifyContent="center"
        display="flex"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
        <img src={Profileimg} alt="noimg" style={{height:"80%", width:"80%"}}></img>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={8}>
      <Box
          sx={{
            my: 4,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={3}>
          <Grid item xs={12}>
              <h1>Profile</h1>
            </Grid>

            <Grid item xs={12}>
              <TextField
              id="facname"
              fullWidth
              label="Name"
              value={UserName || ''}
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              // helperText="Select request type"
              >
              </TextField>
            </Grid>

            <Grid item xs={12}>
             <TextField
              id="mailid"
              fullWidth
              label="Mail ID"
              value={CurrentEmail || ''}
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              // helperText="Select request type"
              >
              </TextField>
            </Grid>

            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
              <Button type='submit' variant='contained' color='primary' onClick={ () => {setOpench_uname(true);}}>Change Username</Button>
              <Dialog open={opench_uname} onClose={ () => {setOpench_uname(false);}}>
                    <DialogTitle>
                    <div style={{paddingTop : '0.5em' , paddingBottom: '0.5em',fontSize:'1.5em'}} >
                          Change Username 
                          <hr></hr>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                      <Grid container spacing={2} component="form" autoComplete="off">
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="newusername"
                              name="newusername"
                              label="New Username"
                              fullWidth
                              variant="outlined"
                            />
                          </Grid>
          </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {setOpench_uname(false);}} color="error" variant='outlined'>Close</Button>
                <Button onClick={() => {setOpench_uname(false);}} color="success" variant='outlined'>Save Changes</Button>
            </DialogActions>
          </Dialog>
            </Grid>

            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                  <Button type='submit' variant='contained' color='primary'onClick={() => {setOpenchpswd(true);}}>Change Password</Button>
                  <Dialog open={openchpswd} onClose={() => {setOpenchpswd(false);}}>
                    <DialogTitle>
                        <div style={{paddingTop : '0.5em' , paddingBottom: '0.5em',fontSize:'1.5em'}} >
                          Change Password 
                          <hr></hr>
                        </div>
                      </DialogTitle>
                    <DialogContent>
                      <Grid container spacing={2} component="form" autoComplete="off">
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="oldpswd"
                              name="oldpswd"
                              label="Old Password"
                              fullWidth
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="newpswd"
                              name="newpswd"
                              label="New Password"
                              fullWidth
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="repswd"
                              name="repswd"
                              label="Re Enter New Password"
                              fullWidth
                              variant="outlined"
                            />
                          </Grid>
          </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {setOpenchpswd(false);}} color="error" variant='outlined'>Close</Button>
                <Button onClick={() => {setOpenchpswd(false);}} color="success" variant='outlined'>Save Changes</Button>
            </DialogActions>
          </Dialog>
            </Grid>
          </Grid>
      </Box>
      </Grid>
      </Grid>
      

    </Grid>
  );
}

export default Profile;
