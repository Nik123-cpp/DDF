import React, { useEffect } from 'react'
import {useParams , Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function Faculty_Home() {

    
    let result_email = localStorage.getItem("FacultyEmail")
    
   
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
