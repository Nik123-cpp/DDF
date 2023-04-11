import React from 'react'
import {useParams , Outlet} from 'react-router-dom'
import Faculty_Navbar from './Faculty_Navbar1'

function Faculty_Home() {
    const params = useParams()
    const user_id = params.user_id

    return (
      <div>
        <Faculty_Navbar />
        <h2>
          Home Page
        </h2>
      <Outlet/>
      </div>
    )

}

export default Faculty_Home