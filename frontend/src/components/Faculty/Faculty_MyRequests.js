import React ,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap';
import Table from '../table';
import { columns_type_1 } from '../columns';

const columns = columns_type_1

const Faculty_MyRequests = ()  =>{

  const [data,setdata] = useState([])

  let faculty_email = localStorage.getItem("FacultyEmail")
  
  useEffect(() => {
      
      const url = "/allrequest/myrequests/" + faculty_email
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setdata(data)}
          );
    
  
  }, []);




    return (
      <>

        <Container style={{ height: '70%', width: '100%' }} >
        <div style={{paddingTop : '1em' , paddingBottom: '0.5em',fontSize:'1.8em'}} >
            My Requests
          </div>
          
          <Table rows={data} coloumns={columns} />

        </Container>

      </>  
    )

}


export default Faculty_MyRequests