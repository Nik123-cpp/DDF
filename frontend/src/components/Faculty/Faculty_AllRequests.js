import React from 'react'
import {Outlet} from 'react-router-dom'
import Faculty_Navbar from './Faculty_Navbar1'

function Faculty_AllRequests() {

    return (
      <div>
        <Faculty_Navbar />
        <h2>
          ALL Requests Page
        </h2>
        <Outlet />
      </div>
    )

}

export default Faculty_AllRequests