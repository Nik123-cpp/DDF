import React from 'react'
import {useParams} from 'react-router-dom'

function Faculty_ReqDetails() {
  
    const params = useParams()
    const user_id = params.user_id
    const request_id = params.request_id

    return (
      <div>
        <h1>
          Faculty user_id:{user_id}  
        </h1>
        <h2>
          Request Details of Request id : {request_id}
        </h2>
      </div>
    )
}

export default Faculty_ReqDetails