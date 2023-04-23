import React, { useEffect } from 'react'
import {useParams , Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function Faculty_Home() {
    const params = useParams()
    const user_id = params.user_id
    const navigate = useNavigate()
    let result_email = localStorage.getItem("UserEmail")
    //console.log("user email is : ",result_email)
    let isloggedIn=localStorage.getItem('IsLoggedIn')

    useEffect(()=>{
    

    },[])
    
   
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
