import React from 'react'

function Committee_Home() {
    
    let result_email = localStorage.getItem("UserEmail")
    
    return (
      <div>
        <h2>
          Home Page : {result_email}
        </h2>
      </div>
    )

}

export default Committee_Home
