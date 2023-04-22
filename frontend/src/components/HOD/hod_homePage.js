import React from 'react'
import {useParams , Outlet} from 'react-router-dom'

import Hod_navbar from './hod_navbar';
import { useLocation } from 'react-router-dom';




function HOD_Home() {
    const params = useParams()
    
    let email_address = localStorage.getItem("UserEmail")
    
    return (
      <div>
        
        <h2>
          Home Page : {email_address}
        </h2>
      <Outlet/>
      </div>
    )

}


export default HOD_Home;