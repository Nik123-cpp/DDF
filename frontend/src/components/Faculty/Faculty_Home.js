import React from 'react'
import {useParams} from 'react-router-dom'

function Faculty_Home() {
    const params = useParams()
    const user_id = params.user_id

    return (
      <div>
        <h1>
            Faculty :{user_id} ,
        </h1>
        <h2>
          Home Page
        </h2>
      </div>
    )

}

export default Faculty_Home