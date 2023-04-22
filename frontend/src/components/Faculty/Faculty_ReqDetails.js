import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
function Faculty_ReqDetails() {
  
    const params = useParams()
    const request_id = params.request_id
    
    const navigate = useNavigate()
    let isloggedIn=localStorage.getItem('IsLoggedIn')

    useEffect(()=>{
      if ( isloggedIn ===null || isloggedIn === 'false'  ){
        console.log("came ");
        navigate('/');
      }

    },[])

    return (
      <div>
x        <h2>
          Request Details of Request id : {request_id}
        </h2>
      </div>
    )
}

export default Faculty_ReqDetails