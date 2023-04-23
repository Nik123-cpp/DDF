import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Faculty_Home from "./components/Faculty/Faculty_Home";
import Faculty_AllRequests from "./components/Faculty/Faculty_AllRequests";
import Faculty_NewRequest from "./components/Faculty/Faculty_NewRequest";
import Profile from "./components/Profile";
import Faculty_ReqDetails from "./components/Faculty/Faculty_ReqDetails";
import Faculty_PendingRequests from "./components/Faculty/Faculty_PendingRequests";
import NP from "./components/NP";

import HOD_Home from "./components/HOD/hod_homePage";
import Faculty_Navbar from "./components/Faculty/Faculty_Navbar1";
import Committe_Home from "./components/Committee/Committee_HomePage";
import Committee_PendingRequests from "./components/Committee/Committee_PendingRequests";
import Committee_Navbar from "./components/Committee/Committee_Navbar";
import Committe_Allrequests from "./components/Committee/Committe_Allrequests";

import HOD_PendingRequest from "./components/HOD/hod_PendingRequest";
import HOD_AllRequests from "./components/HOD/hod_allrequest";
import HOD_DDF from "./components/HOD/Hod_DDF_page";
import Hod_navbar from "./components/HOD/hod_navbar";

import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  let isloggedin = localStorage.getItem("IsLoggedIn");
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />

      <Route
        path="/Faculty/"
        element={
          <ProtectedRoute IsLoggedIn={isloggedin}>
            <Faculty_Navbar />
          </ProtectedRoute>
        }
      >
        <Route
          path=""
          element={
            <ProtectedRoute IsLoggedIn={isloggedin}>
              <Faculty_Home />
            </ProtectedRoute>
          }
        />

        <Route path="AllRequests">
          <Route
            path=""
            element={
              <ProtectedRoute IsLoggedIn={isloggedin}>
                <Faculty_AllRequests />
              </ProtectedRoute>
            }
          />
          <Route path=":request_id" element={<Faculty_ReqDetails />} />
        </Route>

        <Route path="PendingRequests">
          <Route path="" element={<Faculty_PendingRequests />} />
          <Route path=":request_id" element={<Faculty_ReqDetails />} />
        </Route>

        <Route path="NewRequest" element={<Faculty_NewRequest />} />
        <Route path="Profile" element={<Profile />} />
      </Route>

      <Route
        path="/Committee/"
        element={
          <ProtectedRoute IsLoggedIn={isloggedin}>
            
            <Committee_Navbar />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Committe_Home />} />

        <Route path="AllRequests">
          <Route path="" element={<Committe_Allrequests />} />
          <Route path=":request_id" element={<Faculty_ReqDetails />} />
        </Route>

        <Route path="PendingRequests">
          <Route path="" element={<Committee_PendingRequests />} />
          <Route path=":request_id" element={<Faculty_ReqDetails />} />
        </Route>

        <Route path="Profile" element={<Profile />} />
      </Route>

      <Route
        path="/Hod/"
        element={
          <ProtectedRoute IsLoggedIn={isloggedin}>
            
            <Hod_navbar />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<HOD_Home />} />
        <Route path="PendingRequests" element={<HOD_PendingRequest />} />
        <Route path="AllRequests" element={<HOD_AllRequests />} />
        <Route path="DDF" element={<HOD_DDF />} />
        <Route path="Profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<NP />} />
    </Routes>
  );
}

export default App;
