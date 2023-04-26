import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {Paper, TextField,Grid,} from '@mui/material'
import Req_Details from '../Request_Details'


function Faculty_ReqDetails() {
  
    const params = useParams()
    const request_id = params.request_id
  

    const [request,setrequest] = useState({})
    const [isfailed,setfailed]  = useState(false)
    const [activeStep,setactiveStep] = useState(1)

    var getactivestep = {}
    getactivestep["Requested"] = 1

    getactivestep["Verified"] = 2
    getactivestep["Denied"] = 2

    getactivestep["Approved"] = 3
    getactivestep["Rejected"] = 3



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