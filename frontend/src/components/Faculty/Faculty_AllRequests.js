import React from 'react'
import {Outlet} from 'react-router-dom'
import Faculty_Navbar from './Faculty_Navbar1'

import { useLocation } from 'react-router-dom'

function Faculty_AllRequests() {

  const location = useLocation();
  let faculty_email=location.state;

    return (
      <div>
        <Faculty_Navbar state={faculty_email} />
        <h2>
          ALL Requests Page
        </h2>
        <Outlet />
      </div>
    )

}

export default Faculty_AllRequests