import React from 'react'
import {useParams} from 'react-router-dom'

function Profile() {

  const params = useParams()
  const user_id = params.user_id

  return (
    <div>
      <h1>
        Profile  of User_ID :  {user_id}
      </h1>
    </div>
  )
}

export default Profile