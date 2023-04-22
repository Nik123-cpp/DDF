import React ,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap';
import Table from '../table';
import Hod_navbar from './hod_navbar';

const columns = [
    {  accessorKey: '_id', header: 'Request ID',type:'string' , width: 150 },
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
  ]


  const HOD_Pending_requests = () =>{
    const [data,setdata] = useState([])
    let email_address = localStorage.getItem("UserEmail")

    useEffect( ()=>{
        const url = "/pendingrequest/faculty/"+email_address
        fetch(url).then((res)=>res.json() )
        .then((d)=>{
            setdata(d)
        });
    },[]);

    return (
        <>
          
          <Container style={{ height: '70%', width: '100%' }} >
            <h3 style={{paddingTop : '1em' , paddingBottom: '0.5em'}} >
              Pending Requests
            </h3>
            
            <Table rows={data} coloumns={columns} />
  
          </Container>
  
        </>  
      )
  


  }

  export default HOD_Pending_requests;