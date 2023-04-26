import React, { useMemo , useState , useEffect} from 'react';
import MaterialReactTable from 'material-react-table';

import {Box , IconButton} from '@mui/material'
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import { useNavigate } from 'react-router-dom';

const Example = (props) => {
  //should be memoized or stable
  const {rows,coloumns} = props

  const columns = useMemo(
    () => coloumns,
    [],
  );

  // handle_OnClick = (req_id) => {

  //   alert("You selected request with" + req_id)
  // }

  const navigate = useNavigate()

  const  nav_req_details = (req_id) => {
    navigate(req_id)
  }

  return (<MaterialReactTable 
    enableStickyHeader
    enableStickyFooter

    columns={columns} 
    data={rows} 
    
    enableRowNumbers
    initialState={{ columnVisibility: { _id: false, email_address: false} }} 

    muiTableBodyRowProps={({ row }) => ({
    onClick: (event) => { nav_req_details(row.original._id)
    },
    sx: {
      cursor: 'pointer', //you might want to change the cursor too when adding an onClick
    },
  })}

    getRowId={(originalRow) => originalRow._id}

  />);
};

export default Example;