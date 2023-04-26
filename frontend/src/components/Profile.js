import React from "react";
import "../Styles/Profile.css";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// On click of Change password button new component will be shown/Added with new password fields
import { Grid, Paper, Box, TextField, Button} from "@mui/material";
import Profileimg from "./Images_folder/Profile_alternative.png"
import CssBaseline from '@mui/material/CssBaseline';


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

  let isloggedIn = localStorage.getItem("IsLoggedIn");
  const navigate = useNavigate();
  //console.log("user email is :" , result_email)
  let data = result_email;
  // Function to collect data
  const getdetails = async () => {
    const url = "/profile/" + data;
    const response = await fetch("http://localhost:8000" + url, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        const user = data.User;
        if (user === null) {
          alert(`User with ${data} doesnot exist`);
        }
        //console.log(user)
        setusername(user.username);
      });
  };

  useEffect(() => {
    // if (isloggedIn === null || isloggedIn === "false") {
    //   navigate("/");
    // } else {
    //   getdetails();
    // }

    if (location.pathname == "/Committee/Profile") {
      setusername(localStorage.getItem("CommitteeUsername"));
      setCurrentEmail(localStorage.getItem("committeeEmail"));
    } else if (location.pathname == "/hod/Profile") {
      setusername(localStorage.getItem("HodUsername"));
      setCurrentEmail(localStorage.getItem('hodEmail'));
    } else {
      setusername(localStorage.getItem("FacultyUsername"));
      setCurrentEmail(localStorage.getItem('FacultyEmail'));
    }
  }, []);
  const [change_pwd_button_popup, set_popup_change_pwd] = useState(false);
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
      <Grid item xs={12} sm={8} md={8} square>
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
              value="getfacname"
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
              value="getfacmail"
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
              <Button type='submit' variant='contained' color='primary'>Change Username</Button>
            </Grid>

            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                  <Button type='submit' variant='contained' color='primary'>Change Password</Button>
            </Grid>
          </Grid>
      </Box>
      </Grid>
      </Grid>
      

    </Grid>
    // <div>
    //   <Container>
    //     <div className="Container">
    //       <div className="Profile_block_inner">
    //         <div className="Profile_title">
    //           <h2>Profile Page</h2>
    //         </div>
    //         <div className="Image">
    //           <img src="" alt="Profile Pic" />
    //         </div>
    //         <div className="Profile_content">
    //           <div className="Profile_label">Name :</div> <div>{UserName}</div>
    //           <div className="Profile_label">Email address :</div>
    //           <div> {data}</div>
    //           <div className="Profile_label">contact :</div> <div> {} </div>
    //         </div>
    //         <div>
    //           <button onClick={() => set_popup_change_pwd(true)}>
    //             Change password
    //           </button>
    //           <Popup_change_password
    //             trigger={change_pwd_button_popup}
    //             setTrigger={set_popup_change_pwd}
    //           >
    //             <Change_password></Change_password>
    //           </Popup_change_password>
    //         </div>
    //       </div>
    //     </div>
    //   </Container>
  // </div>

  );
}

export default Profile;

function Popup_change_password(props) {
  return props.trigger ? (
    <div className="popup_change_password">
      <div className="popup_change_password_inner_elements">
        <button
          className="popup_change_password_close_button"
          onClick={() => props.setTrigger(false)}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

function Change_password() {
  return (
    <div className="changePassword_fields">
      <div className="Password_fields">
        <div className="Password_fields_labels">Old password</div>
        <input type="text" name="" id="" />
      </div>
      <div className="Password_fields">
        <div className="Password_fields_labels">New password</div>
        <input type="password" name="" id="" />
      </div>

      <div className="Password_fields">
        <div className="Password_fields_labels">Reenter New password </div>
        <input type="password" name="" id="" />
      </div>
    </div>
  );
}
