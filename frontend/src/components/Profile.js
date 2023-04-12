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


function profile()
{
  return 
  (
    <div>
      <h1>
        Profile  of User_ID :  {user_id}
      </h1>
      <div>
        UserName : {}
      </div>
      <div>
        Email address : {}
      </div>
      <div>
        Contact : {}
      </div>
      

    </div>
  )
}

function change_password()
{ 
  return (
    <div>
      <div className="oldpassword">
        <input type="password" name="oldpassword" id="" />
      </div>

      <div className="newpassword">
        <input type="password" name="" id="" />
      </div>

      <div className="reenternewpassword">
      <input type="password" name="" id="" />
      </div>

    </div>
  )
}