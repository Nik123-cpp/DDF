import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Faculty_Home from './components/Faculty/Faculty_Home';
import Faculty_AllRequests from './components/Faculty/Faculty_AllRequests';
import Faculty_NewRequest from './components/Faculty/Faculty_NewRequest';
import Profile from './components/Profile';
import Faculty_ReqDetails from './components/Faculty/Faculty_ReqDetails';
import Faculty_PendingRequests from './components/Faculty/Faculty_PendingRequests';
import NP from './components/NP';

import HOD_Home from './components/HOD/hod_homePage';


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      
      <Route path="/Faculty/:user_id">

        <Route path="" element={<Faculty_Home />} />

        <Route path="AllRequests">
          <Route path=""  element={<Faculty_AllRequests />} />
          <Route path=":request_id" element={<Faculty_ReqDetails />} />
        </Route>

        <Route path="PendingRequests" >
          <Route path="" element={<Faculty_PendingRequests />} />
          <Route path=":request_id" element={<Faculty_ReqDetails />}/>
        </Route>

        <Route path="NewRequest" element={<Faculty_NewRequest />} />
        <Route path="Profile" element={<Profile />} />
      </Route>


      <Route path= "/hod/" >
        <Route path='' element={<HOD_Home/>}>

        </Route>
      </Route>

      <Route path="*" element={<NP />} />
    </Routes>

  );
}

export default App;
