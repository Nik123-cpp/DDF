import React from "react";
import Hod_navbar from "./hod_navbar";

import { Outlet } from "react-router-dom";



function HOD_DDF_page() {
   
    
    let email_address = localStorage.getItem("UserEmail")
    
    return (
      <div>
        
        <h2>
          DDF management page 
        </h2>
      <Outlet/>
      </div>
    )

}

export default HOD_DDF_page;