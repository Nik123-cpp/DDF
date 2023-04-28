import React ,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap';
import Table from '../table';
import columns from '../columns';



function Faculty_AllRequests() {

  const [data,setdata] = useState([])
 
  let faculty_email = localStorage.getItem("FacultyEmail")

  useEffect(() => {

    
    
      const url = "/allrequest/personal/" + faculty_email
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

export default Faculty_AllRequests