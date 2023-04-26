import React, { useEffect, useState } from "react";
import Hod_navbar from "./hod_navbar";

import { Outlet, useAsyncError } from "react-router-dom";
import {Grid, TextField, InputAdornment, Button, Dialog, DialogTitle, DialogContent, DialogActions, Paper} from "@mui/material";

function HOD_DDF_page() {
  let email_address = localStorage.getItem("UserEmail");
  const [balance, setBalance] = useState(0);
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
    const url = "http://localhost:8000/hod/ddf/updatebalance";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Source, NewBalance: parseInt(NewBalance) }),
    };

    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => alert(data.message));
    setBalance(balance + parseInt(NewBalance));
    setNewBalance("");
    setOpenubaln(false);
  };

  useEffect(() => {
    const url = "http://localhost:8000/hod/ddf/getbalance";
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(url, { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setBalance(data.balance));
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid
        container
        spacing={3}
        component={Paper}
        elevation={20}
        sx={{ padding: "30px 20px", maxWidth: "600px", minWidth: "250px" }}
      >
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <h2>DDF Management Page</h2>
        </Grid>

        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            id="balance"
            label="Current DDF Balance"
            value={balance}
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
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => {
              setOpenubaln(true);
            }}
          >
            Update DDF Balance
          </Button>
          <Dialog
            open={openubaln}
            onClose={() => {
              setOpenubaln(false);
            }}
          >
            <DialogTitle>
              <h3>Update Balance</h3>
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
      </Grid>
    </Grid>

    // <div>
    //   <h2>DDF management page</h2>
    //   <div>
    //     Balance : {balance}
    //   </div>
    //   <div>
    //     Source:
    //     <input type="text" onChange={handle_source_details}></input>
    //   </div>
    //   <div>
    //     update balance :
    //     <input type="text" onChange={handle_new_balance} />
    //     <button type="submit" onClick={UpdataNewBalance} >Update</button>
    //   </div>
    //   <div>

    //   </div>
    //   <Outlet />
    // </div>
  );
}

export default HOD_DDF_page;
