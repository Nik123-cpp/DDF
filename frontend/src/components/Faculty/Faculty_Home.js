import React from 'react'
import {useParams , Outlet} from 'react-router-dom'
import Faculty_Navbar from './Faculty_Navbar1'

import { useLocation } from 'react-router-dom';



function Faculty_Home() {
    const params = useParams()
    const user_id = params.user_id
    const location = useLocation();
    const data = location.state;
    
    return (
      <div>
        <Faculty_Navbar state={data}/>
        <h2>
          Home Page : {data}
        </h2>
      <Outlet/>
      </div>
    )

}

export default Faculty_Home
