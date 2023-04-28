import React from 'react'

function HOD_Home() {
    
    let email_address = localStorage.getItem("UserEmail")
    
    return (
      <div>
        
        <h2>
          Home Page : {email_address}
        </h2>
      </div>
    )

}


export default HOD_Home;