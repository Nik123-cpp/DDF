import React ,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap';
import Table from '../table';
import { useNavigate } from 'react-router-dom';

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

const Faculty_PendingRequests = ()  =>{

  const [data,setdata] = useState([])

  const navigate = useNavigate()
  //console.log("faculty data is ", faculty_email)
  let faculty_email = localStorage.getItem("FacultyEmail")
  
  useEffect(() => {
      
      const url = "/pendingrequest/faculty/" + faculty_email
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
            Pending Requests
          </div>
          
          <Table rows={data} coloumns={columns} />

        </Container>

      </>  
    )

}


export default Faculty_PendingRequests