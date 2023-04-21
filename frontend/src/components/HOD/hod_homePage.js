import React from 'react'
import {useParams , Outlet} from 'react-router-dom'

import Hod_navbar from './hod_navbar';
import { useLocation } from 'react-router-dom';




function HOD_Home() {
    const params = useParams()
    
    const location = useLocation();
    const data = location.state;
    
    return (
      <div>
        <Hod_navbar/>
        <h2>
          Home Page : {data}
        </h2>
      <Outlet/>
      </div>
    )

}


export default HOD_Home;