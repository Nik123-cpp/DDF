import React from 'react'
import {useParams} from 'react-router-dom'

function Faculty_NewRequest() {
    const params = useParams()
    const user_id = params.user_id

    return (
      <div>
        <h1>
            Faculty :{user_id} 
        </h1>
        <h2>
            New Requests Page
        </h2>
      </div>
    )

}


export default Faculty_NewRequest