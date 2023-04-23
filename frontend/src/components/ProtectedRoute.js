import React, { useEffect } from "react";
import Home from "./Home";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ IsLoggedIn, children }) {
  const navigate = useNavigate();
  useEffect(()=>{
    if (!(IsLoggedIn == "true")) {
        navigate("/Login");
        //return <Navigate path="/" element={<Home />} />;
      }
  },[])
  if (!(IsLoggedIn == "true")) {
    navigate("/Login");
    return <Navigate path="/Login" element={<Home />} />;
  }
  return children;
}

export default ProtectedRoute;
