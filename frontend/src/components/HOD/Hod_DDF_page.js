import React, { useEffect, useState } from "react";
import {Grid, TextField, InputAdornment, Button, Dialog, DialogTitle, DialogContent, DialogActions, Paper} from "@mui/material";
import { ddf_columns } from "../columns";
import columns from '../columns'
import MaterialReactTable from 'material-react-table';
import { Container } from 'react-bootstrap';

function HOD_DDF_page() {
  const [NewBalance, setNewBalance] = useState(0);
  const [Source, setSource] = useState("");
  const [openubaln, setOpenubaln] = React.useState(false);

  const handle_new_balance = (event) => {
    setNewBalance(event.target.value);
  };
  const handle_source_details = (event) => {
    setSource(event.target.value);
  };

  const UpdataNewBalance = async (event) => {
    event.preventDefault();
    if (Source=="" || NewBalance == 0) {
      alert("Please enter all details")
    } else {
        const url = "http://localhost:8000/ddfrecords/add_ddf";
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Source: Source, Amount: parseInt(NewBalance) }),
      };

      fetch(url, requestOptions)
        .then((res) => res.json())
        .then((data) => alert(data.message))
        .then(() => {window.location.reload(false);});
    }
    
    
    setOpenubaln(false);
  };

 
  const [transactions,setdata] = useState([{balance: 0}])

  useEffect(() => {
      
    const url = "/ddfrecords/all_transactions"
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setdata(data)}
        );
  

}, []);


  return (
    <Container style={{ height: '70%', width: '100%' }}>

    <Grid
      container
      spacing={5}
      mt={3}
      // style={{ minHeight: "100vh" }}
    >
        <Grid item xs={12} sm={8}>
          <h2>DDF Management Page</h2>
        </Grid>

        <Grid item xs={12} sm={2} display="flex" justifyContent="flex-end" alignItems="end">
          <TextField
            id="balance"
            label="Current DDF Balance"
            value={transactions[0].balance}
            InputProps={{
              readOnly: true,
              startAdornment: (
                <InputAdornment position="start">Rs</InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2} display="flex" justifyContent="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              setOpenubaln(true);
            }}
          >
            Add Fund
          </Button>
          <Dialog
            open={openubaln}
            onClose={() => {
              setOpenubaln(false);
            }}
          >
            <DialogTitle>
              <h3>Add Fund</h3>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <hr></hr>
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Source Details"
                    onChange={handle_source_details}
                  />
                </Grid>
                <Grid item xs={12}>
                  <hr></hr>
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Add Amount"
                    type="number"
                    onChange={handle_new_balance}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Rs</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setOpenubaln(false);
                }}
                color="error"
                variant="contained"
              >
                Close
              </Button>
              <Button
                onClick={UpdataNewBalance}
                color="success"
                variant="contained"
              >
                Save Changes
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item xs={12} sm={12}>
          <MaterialReactTable 
            enableStickyHeader
            enableStickyFooter

            columns={ddf_columns} 
            data={transactions} 
            enableRowNumbers
            initialState={{ columnVisibility: { _id: false} , density: 'compact'  }} 

            getRowId={(originalRow) => originalRow._id}

          />
        </Grid>
      
      
    </Grid>
    </Container>


  );
}

export default HOD_DDF_page;
