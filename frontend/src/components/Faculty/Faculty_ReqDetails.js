import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {Paper, TextField, Button, Box, Step, Stepper, StepLabel} from '@mui/material'
import { Container } from 'react-bootstrap'
import {Table, TableContainer, TableBody, TableCell, TableRow} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function Faculty_ReqDetails() {
  
    const params = useParams()
    const request_id = params.request_id
    
    const navigate = useNavigate()
    let isloggedIn=localStorage.getItem('IsLoggedIn')

    useEffect(()=>{
      if ( isloggedIn ===null || isloggedIn === 'false'  ){
        console.log("came ");
        navigate('/');
      }

    },[])

    const paperstyle = {padding: '30px 20px', margin:'20px auto', marginTop:'30px'};
    const steps = [
      'Requested',
      'Verified',
      'Accepted',
    ];

    return (
      
      <Container style={{padding:'20px' , height:'8%'}}>
       
        <TableContainer component={Paper} elevation={20} style={paperstyle} sx={{maxWidth:'800px',minWidth: '250px'}}>
        <h2>
          Request Details
          {/* Request Details of Request id : {request_id} */}
        </h2>

        <Box sx={{ width: '100%' }} padding={5}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                  <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

      <Table  aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>

          <TableRow>
              <TableCell align="left" scope="row">
                Request ID
              </TableCell>
              <TableCell align='center'>
                <TextField
                  id="standard-read-only-input"
                  value={request_id}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                >
                </TextField>
              </TableCell>
          </TableRow>

          <TableRow>
              <TableCell align="left" scope="row">
                Faculty
              </TableCell>
              <TableCell align='center'>
                <TextField
                  id="standard-read-only-input"
                  // label="Name of Faculty"
                  value={'getname'}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                >
                </TextField>
              </TableCell>
          </TableRow>

          <TableRow>
              <TableCell align="left" scope="row">
                Title
              </TableCell>
              <TableCell align='center'>
                <TextField
                  id="standard-read-only-input"
                  // label="Request Title"
                  value={'gettitle'}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                >
                </TextField>
              </TableCell>
          </TableRow>

          <TableRow>
              <TableCell align="left" scope="row">
                Request Type
              </TableCell>
              <TableCell align='center'>
                <TextField
                  id="standard-read-only-input"
                  // label="Type of Request"
                  value={'gettype'}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                >
                </TextField>
              </TableCell>
          </TableRow>

          <TableRow>
              <TableCell align="left" scope="row">
                Amount
              </TableCell>
              <TableCell align='center'>
                <TextField
                  id="standard-read-only-input"
                  // label="Type of Request"
                  value={'getnumber'}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                >
                </TextField>
              </TableCell>
          </TableRow>

          <TableRow>
              <TableCell align="left" scope="row">
                Document Link
              </TableCell>
              <TableCell align='center'>
                <TextField
                  id="standard-read-only-input"
                  // label="Type of Request"
                  value={'getdoclink'}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                >
                </TextField>
              </TableCell>
          </TableRow>

          <TableRow>
              <TableCell align="left" scope="row">
                Description
              </TableCell>
              <TableCell align='center'>
                <TextField
                  id="outlined-textarea"
                  value={'GetDescription'}
                  fullWidth
                  multiline
                  minRows={4}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper} elevation={20} style={paperstyle} sx={{maxWidth:'800px',minWidth: '250px'}}>
        <h2>
          Review
          {/* Request Details of Request id : {request_id} */}
        </h2>
        
        {/* sx={{ minWidth: 650 }} */}
      <Table  aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>

          <TableRow>
              <TableCell align="left" scope="row">
                Review
              </TableCell>
              <TableCell align='center'>
                <TextField
                  id="outlined-textarea"
                  value={'getReview'}
                  fullWidth
                  multiline
                  minRows={4}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
      </Container>
    )
}

export default Faculty_ReqDetails