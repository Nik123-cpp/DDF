import React from 'react'
import {useParams , Outlet} from 'react-router-dom'




function Faculty_Home() {
    const params = useParams()
    const user_id = params.user_id
    
    let result_email = localStorage.getItem("UserEmail")
    //console.log("user email is : ",result_email)
    
    return (
      <div>
        <h2>
          Home Page : {result_email}
        </h2>
      <Outlet/>
      </div>
    )

}

export default Faculty_Home
