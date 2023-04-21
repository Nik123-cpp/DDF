import React from 'react'
import {useParams , Outlet} from 'react-router-dom'
import Faculty_Navbar from './Faculty_Navbar1'

import { useLocation } from 'react-router-dom';



function Faculty_Home() {
    const params = useParams()
    const user_id = params.user_id
    
    let result_email = localStorage.getItem("UserEmail")
    //console.log("user email is : ",result_email)
    
    return (
      <div>
        <Faculty_Navbar/>
        <h2>
          Home Page : {result_email}
        </h2>
      <Outlet/>
      </div>
    )

}

export default Faculty_Home
