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
    flex: 1,
    width: 120
  },
  {
    field: 'requestType',
    headerName: 'Request type',
    type: 'string',
    flex: 0.9,
    width: 120

  },
  {
    field: 'created',
    headerName: 'Date Submitted',
    type: 'string',
    flex: 1.1,
    width: 200
  },
  {
    field: 'amount',
    headerName: 'Amount Requested',
    type: 'number',
    headerAlign: 'left',
    flex : 1,
    width: 120
  },

  {
    field: 'status',
    headerName: 'Approval status',
    type: 'string',
    flex : 1,
    width: 200
  }
];






const Faculty_PendingRequests = ()  =>{

  // const params = useParams()
  // const user_id = params.user_id

  const [data,setdata] = useState([])


  useEffect(() => {
    const url = "/pendingrequest/faculty/" + "cs20btech11036@iith.ac.in"
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setdata(d)}
        );
  }, []);




    return (
      <Container style={{ height: '60%', width: '100%' }}>
     
      <Faculty_Navbar/>
      <Container>
        <h3 style={{paddingTop : '1em' , paddingBottom: '0.5em'}} >
          Pending Requests
        </h3>

      </Container>
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

    </Container>
    )

}


export default Faculty_PendingRequests