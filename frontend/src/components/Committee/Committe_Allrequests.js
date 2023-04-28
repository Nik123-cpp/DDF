import React ,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap';
import Table from '../table';
import columns from '../columns';


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