import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {Paper, TextField, Button ,Grid } from '@mui/material'
import { ThumbDown, ThumbUp } from '@mui/icons-material';
import Req_Details from '../Request_Details'

function HOD_ReqDetails() {
  
    const params = useParams()
    const request_id = params.request_id

    const navigate = useNavigate()
    const nav_hod_pendingreq = () => {
      navigate('/Hod/PendingRequests')
    }
  
    const [request,setrequest] = useState({})
    const [approved,setapproved] = useState(true)
    const [isfailed,setfailed]  = useState(false)
    const [activeStep,setactiveStep] = useState(1)
    const [needAmount,setNeedAmount] = useState(0)

    var getactivestep = {}
    getactivestep["Requested"] = 1

    getactivestep["Verified"] = 2
    getactivestep["Denied"] = 2

    getactivestep["Approved"] = 3
    getactivestep["Rejected"] = 3



    function handle_approve(event) {
      event.preventDefault();
      const url = "/hod/approve/" + request_id
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body : JSON.stringify({name:"Request :"+request_id , DeductAmount:needAmount})
      };

      fetch(url, requestOptions)
      .then(res => res.json())
      .then(data => alert(data.message))
      .then(nav_hod_pendingreq)
    }

    function handle_reject(event) {

      event.preventDefault();
      const url = "/hod/reject/" + request_id
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
      };

      fetch(url, requestOptions)
      .then(res => res.json())
      .then(data => alert(data.message))
      .then(nav_hod_pendingreq)

    }

    useEffect(()=>{
       
        const url = "/request/" + request_id
        fetch(url)
          .then((res) => res.json())
          .then((request) => {
            setrequest(request);
            setapproved(request.status!=="Verified")
            setfailed(request.status==="Denied" || request.status==="Rejected");
            setactiveStep(getactivestep[request.status])
            setNeedAmount(request.amount)
            }
          );
      

    },[])

    const paperstyle = {padding: '30px 20px', margin:'20px auto', marginTop:'30px'};
   
    
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
        
        <Grid container spacing={6}>

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
                value={request.review || ''}
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </Grid>

            <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
              <Button type='submit' variant='contained' color='error' disabled={approved} endIcon={<ThumbDown/>} onClick={handle_reject}>Reject</Button>
            </Grid>

            <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center"> 
              <Button type='submit' variant='contained' color='success' disabled={approved} endIcon={<ThumbUp/>} onClick={handle_approve}>Approve</Button>
            </Grid>

        </Grid>

      </Paper>
    </Grid>

  )
}

export default HOD_ReqDetails