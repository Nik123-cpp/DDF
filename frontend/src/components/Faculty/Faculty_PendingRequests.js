import React ,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Faculty_Navbar from './Faculty_Navbar1'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container } from 'react-bootstrap';

const columns = [
  { field: '_id', headerName: 'Request ID',type:'string' , width: 150 },
  {
    field: 'title',
    headerName: 'Title',
    type: 'string',
    width: 120
  },
  {
    field: 'requestType',
    headerName: 'Request type',
    type: 'string',
    width: 120

  },
  {
    field: 'created',
    headerName: 'Date Submitted',
    type: 'string',
    width: 200
  },
  {
    field: 'amount',
    headerName: 'Amount Requested',
    type: 'number',
    width: 120
  },

  {
    field: 'status',
    headerName: 'Approval status',
    type: 'string',
    width: 200
  }
];






const Faculty_PendingRequests = ()  =>{

  // const params = useParams()
  // const user_id = params.user_id

  const [data,setdata] = useState([{_id: 1,title: "Fun"}])
  const [dat,setdat] = useState(1)


  useEffect(() => {
    const url = "/pendingrequest/faculty/" + "cs20btech11036@iith.ac.in"
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setdat(2)
        setdata(d)}
        );
  }, []);




    return (
      <div style={{ height: 800, width: '100%' }}>
     
      <Faculty_Navbar/>
      <Container>
        <h3 style={{paddingTop : '1em' , paddingBottom: '0.5em'}} >
          Pending Requests
        </h3>

      </Container>
      {/* <Container > */}
        <DataGrid getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
          pageSize={[5]}
        />
      {/* </Container> */}

      <h1>
        {dat}
      </h1>
     
    </div>
    )

}


export default Faculty_PendingRequests