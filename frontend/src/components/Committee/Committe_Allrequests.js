import React ,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap';
import Table from '../table';

const columns = [
  { accessorKey: '_id', header: 'Request ID',type:'string' , width: 150 },
  {
    accessorKey: 'email_address',
    header: 'Faculty ID',
    type: 'string',
    flex: 1,
    width: 120
  },
  {
    accessorKey: 'faculty_name',
    header: 'Faculty Name',
    type: 'string',
    flex: 1,
    width: 120
  },
  {
    accessorKey: 'title',
    header: 'Title',
    type: 'string',
    flex: 1,
    width: 120
  },
  {
    accessorKey: 'requestType',
    header: 'Request type',
    type: 'string',
    flex: 0.9,
    width: 120

  },
  {
    accessorKey: 'created',
    header: 'Date Submitted',
    type: 'string',
    flex: 1.1,
    width: 200
  },
  {
    accessorKey: 'amount',
    header: 'Amount Requested',
    type: 'number',
    headerAlign: 'left',
    flex : 1,
    width: 120
  },

  {
    accessorKey: 'status',
    header: 'Approval status',
    type: 'string',
    flex : 1,
    width: 200
  }
];

function Committe_Allrequests() {

  const [data,setdata] = useState([])


  useEffect(() => {
    const url = "/allrequest"
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setdata(d)}
        );
  }, []);


  return (
    <>
        
        <Container style={{ height: '70%', width: '100%' }} >
        <div style={{paddingTop : '1em' , paddingBottom: '0.5em',fontSize:'1.8em'}} >
            All Requests
          </div>
          
          <Table rows={data} coloumns={columns} />

        </Container>

      </>
  )
}

export default Committe_Allrequests