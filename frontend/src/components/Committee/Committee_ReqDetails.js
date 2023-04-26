import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {Paper, TextField, Button,Grid } from '@mui/material'
import { ThumbDown } from '@mui/icons-material';
import SendIcon  from '@mui/icons-material/Send';
import Req_Details from '../Request_Details'


function Committee_ReqDetails() {
  
    const params = useParams()
    const request_id = params.request_id
    
   

    const [review,setreview] = useState("")
    const [verified,setverified] = useState(true)
    const [isfailed,setfailed]  = useState(false)
    const [activeStep,setactiveStep] = useState(1)

    var getactivestep = {}
    getactivestep["Requested"] = 1

    getactivestep["Verified"] = 2
    getactivestep["Denied"] = 2

    getactivestep["Approved"] = 3
    getactivestep["Rejected"] = 3


 


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
      if(request.status === "Requested"){
    
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
            setrequest(request);
            setverified(request.status!=="Requested");
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
        
          <Req_Details request={request} isfailed={isfailed} activeStep={activeStep}/>
          

          <hr></hr>
          <br></br>
          <h3>Review</h3>
          <br></br>
      
          <Grid container spacing={6}>

            <Grid item xs={12}>
              {review_comp(request)}
            </Grid>

            <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
              <Button type='submit' variant='contained' color='error' disabled={verified} endIcon={<ThumbDown/> } onClick={handle_deny}>Reject</Button>
            </Grid>

            <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
              <Button type='submit' variant='contained' color='success' disabled={verified} endIcon={<SendIcon/>} onClick={handle_verify}>Verified</Button>
            </Grid>

          </Grid>

        </Paper>
      </Grid>

  )
}

export default Committee_ReqDetails