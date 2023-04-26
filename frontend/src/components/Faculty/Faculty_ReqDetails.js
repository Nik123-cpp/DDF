import React, { useState } from 'react'
import {useAsyncError, useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {Paper, TextField, Button, Box, Step, Stepper, StepLabel,Grid, InputAdornment } from '@mui/material'
import { teal } from '@mui/material/colors'
import { createTheme, ThemeProvider} from '@mui/material'


function Faculty_ReqDetails() {
  
    const params = useParams()
    const request_id = params.request_id
    
    const navigate = useNavigate()
    let isloggedIn=localStorage.getItem('IsLoggedIn')


    const [request,setrequest] = useState({})
    const [isfailed,setfailed]  = useState(false)
    const [activeStep,setactiveStep] = useState(1)

    var getactivestep = {}
    getactivestep["Requested"] = 1

    getactivestep["Verified"] = 2
    getactivestep["Denied"] = 2

    getactivestep["Approved"] = 3
    getactivestep["Rejected"] = 3

    const theme = createTheme({palette: {secondary: teal},});

    var getstatuscolor = {}
    getstatuscolor["Requested"] = "primary"
    getstatuscolor["Verified"] = "secondary"
    getstatuscolor["Denied"] = "error"
    getstatuscolor["Approved"] = "success"
    getstatuscolor["Rejected"] = "error"

    const message = ["Denied by committee" , "Rejected by HOD"]


    useEffect(()=>{
       
        const url = "/request/" + request_id
        fetch(url)
          .then((res) => res.json())
          .then((request) => {
            setrequest(request);
            setfailed(request.status==="Denied" || request.status==="Rejected");
            setactiveStep(getactivestep[request.status])

            }
          );
      

    },[])

    const paperstyle = {padding: '30px 20px', margin:'20px auto', marginTop:'30px'};
    const steps = [
      'Requested',
      'Verified',
      'Approved',
    ];

    return (
      <Grid   
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Paper elevation={20} style={paperstyle} sx={{maxWidth:'900px',minWidth: '250px'}}>

        {/*CAN MAKE COMPONENT FROM HERE TO */}

    <Grid container spacing={2}>
    <Grid item xs={12} sm={6} display="flex" justifyContent="flex-start" alignItems="center">
      <h2>Request Details</h2>
      </Grid>

    <Grid item xs={12} sm={6} display="flex" justifyContent="flex-end" alignItems="center">
    <ThemeProvider theme={theme}>
      <Button
        disableElevation
        disableRipple
        disableFocusRipple
        variant='contained'
        style={{cursor:"default"}}
        color={getstatuscolor[request.status]}
      >
        {request.status}
      </Button>
      </ThemeProvider>
    </Grid>

    <Grid item xs={12}>
      <hr></hr>
          <Box sx={{ width: '100%' }} padding={5}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label,index) => {
                if(isfailed && index == activeStep-1){
                  console.log(index)

                  return (
                    (
                    <Step key={message[index-1]}>
                        <StepLabel error={true}>{message[index-1]}</StepLabel>
                    </Step>
                    )
                )
                }
                else if(isfailed && index > activeStep-1)
                {
                  return
                }
                
                return (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
              )})}
            </Stepper>
          </Box>
      </Grid>

    <Grid item xs={12} sm={8}>
      <TextField
                  id="reqid"
                  fullWidth
                  label="Request ID"
                  value={request_id}
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

    <Grid item xs={12} sm={4}>
      <TextField
                  id="reqtype"
                  fullWidth
                  label="Request Type"
                  value={request.requestType}
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

      <Grid item xs={12} sm={4}>
      <TextField
                  id="facname"
                  fullWidth
                  label="Faculty Name"
                  value={request.faculty_name}
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

    <Grid item xs={12} sm={8}>
      <TextField
                  id="mailid"
                  fullWidth
                  label="Mail ID"
                  value={request.email_address}
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

      <Grid item xs={12} sm={6}>
        <TextField
          id="title"
          name="title"
          label="Title"
          fullWidth
          variant="outlined"
          value = {request.title}
          InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="amount"
          name="amount"
          label="Amount"
          fullWidth
          variant="outlined"
          value={request.amount}
          InputProps={{
              startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
              readOnly: true,
            }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="doclink"
          name="doclink"
          label="Document Link"
          fullWidth
          variant="outlined"
          value={request.documents}
          InputProps={{
            readOnly: true,
          }}   
          InputLabelProps={{
          shrink: true,
        }}
        />
      </Grid>
      <Grid item xs={12}>
      <TextField
        id="desc"
        fullWidth
        label="Description"
        multiline
        minRows={3}
        variant="outlined"
        value={request.description}
        InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Grid>
      </Grid>

      {/*HERE*/}

    <Grid container spacing={2}>
      <Grid item xs={12}>
      <hr></hr>
      <h3>Review</h3>
      </Grid>
      
    <Grid item xs={12}>
      <TextField
        id="review"
        fullWidth
        label="Review From Committee"
        multiline
        minRows={3}
        variant="outlined"
        value={request.review}
        InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
    </Grid>

    <hr></hr>

    </Paper>
    </Grid>

  )
}

export default Faculty_ReqDetails