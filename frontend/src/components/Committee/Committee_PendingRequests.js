import React ,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap';
import Table from '../table';
import columns from '../columns';


const Committee_PendingRequests = ()  =>{

  const [data,setdata] = useState([])

  

  useEffect(() => {
    const url = "/pendingrequest/committee/"
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


export default Committee_PendingRequests