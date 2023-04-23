import './Faculty_Styles/DDF_NewRequest.css'

import React , {useEffect, useState} from 'react'
import { Paper, Grid, TextField, MenuItem, InputAdornment, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Faculty_NewRequest() {

    
    //const faculty_email=location.state;

    const faculty_email = localStorage.getItem("UserEmail")

    const [request_type, setrequest_type] = useState("Public");

    const [title, settitle] = useState("");

    const [amount,setamount] = useState(0);

    const [doc_link,setdoc_link] = useState("");

    const [description,setdescription] = useState("");

    const navigate = useNavigate()

    const handle_request_type = event => {
        setrequest_type(event.target.value)
    }

    const handle_title = event => {
        settitle(event.target.value)
    }

    const handle_amount = event => {
        setamount(event.target.value)
    }

    const handle_description = event => {
        setdescription(event.target.value)
    }

    const handle_doc_link = event => {
        setdoc_link(event.target.value)
    }

    const handle_submit = event => {

        event.preventDefault();
        // const message = "Requesttype: "+ request_type + "\nTitle :" + title + "\nAmount :" + amount 
        // alert(message)

        const url = "/faculty/create_request"
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title ,requestType : request_type , amount: amount , documents : doc_link , description : description ,email_address : faculty_email   })
        };

        fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => alert(data.message))

    }

    let isloggedIn = localStorage.getItem('IsLoggedIn')
    useEffect(()=>{
        if(isloggedIn===null || isloggedIn==='false')
        {
            navigate('/')

        }

    },[])

    const paperstyle = {padding: '30px 20px', margin:'auto auto', maxWidth:'600px'};
    const Req_Type = [
        {
          value: 'Public',
          label: 'Public',
        },
        {
          value: 'Personal',
          label: 'Personal',
        },
      ];

    

    return (
        <Paper elevation={20} style={paperstyle} sx={{maxWidth:'900px',minWidth: '250px'}}>
        <h2>Request Form</h2>
        <hr/>

      <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
                    id="reqtype"
                    fullWidth
                    select
                    label="Request Type"
                    defaultValue='public'
                    onChange={handle_request_type}
                    // helperText="Select request type"
                >
                {Req_Type.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
          ))}
        </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="outlined"
            onChange={handle_title}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="amount"
            required
            name="amount"
            label="Amount"
            type='number'
            fullWidth
            variant="outlined"
            onChange={handle_amount}
            InputProps={{
                startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
              }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="doclink"
            name="doclink"
            label="Document Link"
            fullWidth
            variant="outlined"
            onChange={handle_doc_link}
            helperText="Provide Drive Link to the required document"
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="desc"
          fullWidth
          label="Description"
          required
          placeholder="Write Proper Description to Your Request here ....."
          multiline
          minRows={3}
          variant="outlined"
          onChange={handle_description}
        />
        </Grid>

        <Grid item>
            <Button type='submit' variant='contained' color='success' onClick={handle_submit}>Submit Request</Button>
        </Grid>
        
      </Grid>
      </Paper>
    )

}


export default Faculty_NewRequest