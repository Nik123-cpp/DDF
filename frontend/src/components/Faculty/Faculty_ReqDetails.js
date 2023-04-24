import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {Paper, TextField, Button, Box, Step, Stepper, StepLabel,Grid, InputAdornment } from '@mui/material'
import { Container } from 'react-bootstrap'


function Faculty_ReqDetails() {
  
    const params = useParams()
    const request_id = params.request_id
    
    const navigate = useNavigate()
    let isloggedIn=localStorage.getItem('IsLoggedIn')


    const [request,setrequest] = useState({})

    useEffect(()=>{
       
        const url = "/request/" + request_id
        fetch(url)
          .then((res) => res.json())
          .then((request) => {
            setrequest(request)
            }
          );
      

    },[])

    const paperstyle = {padding: '30px 20px', margin:'20px auto', marginTop:'30px'};
    const steps = [
      'Requested',
      'Verified',
      'Accepted',
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
      <h2>Request Details</h2>
      <hr/>

    <Grid container spacing={2}>

    <Grid item xs={12}>
          <Box sx={{ width: '100%' }} padding={5}>
            <Stepper activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
              ))}
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

      <hr></hr>
      <h3>Review</h3>
      <br></br>
  
    <Grid container>
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