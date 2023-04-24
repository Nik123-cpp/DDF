import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {Paper, TextField, Button, Box, Step, Stepper, StepLabel,Grid, InputAdornment } from '@mui/material'
import { Container } from 'react-bootstrap'
import {Table, TableContainer, TableBody, TableCell, TableRow} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function Committee_ReqDetails() {
  
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

    const title = String(request.title)
    const reqtype = String(request.requestType)
    const amount = String(request.amount)
    const facname = String(request.faculty_name)
    const fac_email = String(request.email_address)
    // const review = String(request.review)
    const doclink = String(request.documents)
    const desc = String(request.description)
    
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
                  // helperText="Select request type"
      >
      </TextField>
      </Grid>

    <Grid item xs={12} sm={4}>
      <TextField
                  id="reqtype"
                  fullWidth
                  label="Request Type"
                  value={reqtype}
                  InputProps={{
                    readOnly: true,
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
                  value={facname}
                  InputProps={{
                    readOnly: true,
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
                  value={fac_email}
                  InputProps={{
                    readOnly: true,
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
          value = {title}
          InputProps={{
            readOnly: true,
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
          value={amount}
          InputProps={{
              startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
              readOnly: true,
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
          value={doclink}
          InputProps={{
            readOnly: true,
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
        value={desc}
        InputProps={{
          readOnly: true,
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
      <TextField
        id="review"
        fullWidth
        label="Review From Committee"
        multiline
        minRows={3}
        variant="outlined"
        placeholder='Write Review here ...'
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Button type='submit' variant='contained' color='success'>Reject</Button>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Box display="flex" justifyContent="flex-end">
    <Button type='submit' variant='contained' color='success'>Verified</Button>
    </Box>
    </Grid>
    </Grid>

    </Paper>
    </Grid>

  )
}

export default Committee_ReqDetails