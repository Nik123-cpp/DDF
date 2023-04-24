import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {Paper, TextField, Button, Box, Step, Stepper, StepLabel,Grid, InputAdornment } from '@mui/material'
import { Container } from 'react-bootstrap'
import {Table, TableContainer, TableBody, TableCell, TableRow} from '@mui/material'
import { ThumbDown } from '@mui/icons-material';
import SendIcon  from '@mui/icons-material/Send';



function Committee_ReqDetails() {
  
    const params = useParams()
    const request_id = params.request_id
    
   

    const [review,setreview] = useState("")


    function handle_review(event) {
      setreview(event.target.value)
    }

    function handle_verify(event) {
      event.preventDefault();
      const url = "/committee/verify/" + request_id
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ review: review })
      };

      fetch(url, requestOptions)
      .then(res => res.json())
      .then(data => alert(data.message))
    }

    function handle_deny(event) {

      event.preventDefault();
      const url = "/committee/deny/" + request_id
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ review: review })
      };

      fetch(url, requestOptions)
      .then(res => res.json())
      .then(data => alert(data.message))

    }

    function review_comp(request)  {

      console.log(request)
      if(request.status == "Requested"){
    
        return (
          <TextField
            id="review"
            fullWidth
            label="Review From Committee"
            multiline
            minRows={3}
            variant="outlined"
            placeholder='Write Review here ...'
            onChange={handle_review}
          />
        )
      }
    
      else {
        return (
          <TextField
            id="review"
            fullWidth
            label="Review From Committee"
            multiline
            minRows={3}
            variant="outlined"
            value = {request.review}
            InputProps={{
                    readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )
      }
    
    }
    

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
      <br></br>
      <h3>Review</h3>
      <br></br>
  
    <Grid container spacing={6}>
    <Grid item xs={12}>
      {review_comp(request)}
    </Grid>
    <Grid item xs={12} sm={6}>
    <Button type='submit' variant='contained' color='error' endIcon={<ThumbDown/> } onClick={handle_deny}>Reject</Button>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Box display="flex" justifyContent="flex-end">
    <Button type='submit' variant='contained' color='success' endIcon={<SendIcon/>} onClick={handle_verify}>Verified</Button>
    </Box>
    </Grid>
    </Grid>

    </Paper>
    </Grid>

  )
}

export default Committee_ReqDetails