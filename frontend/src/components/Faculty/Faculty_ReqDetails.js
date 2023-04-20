import React from 'react'
import {useParams} from 'react-router-dom'
import Faculty_Navbar from './Faculty_Navbar1'
import { useLocation } from 'react-router-dom'

function Faculty_ReqDetails() {
  
    const params = useParams()
    const request_id = params.request_id

    const location = useLocation();
    let faculty_email= location.state;
    return (
      <div>
        <Faculty_Navbar state={faculty_email} />
        <h2>
          Request Details of Request id : {request_id}
        </h2>
      </div>
    )
}

export default Faculty_ReqDetails