import React from "react";
import Faculty_Navbar from "./Faculty/Faculty_Navbar1";
import "../Styles/Profile.css";

import { Faculty_email_address } from "./Login";
// On click of Change password button new component will be shown/Added with new password fields

function Profile() {

  const UserName =""
  const EmailAddress=""
  const url = "/users/"+Faculty_email_address

  fetch(url)
  .then((response) => response.json())
  .then( data => {
    const user = data.User
    if(user === null){
      alert(`User with ${Faculty_email_address} doesnot exist`)
    }
    UserName= user.username;
  })

  return (
    <div>
      <Faculty_Navbar />
      <div class="Profile_block">
        <h2>Profile Page</h2>
        <div>
          <img src="" alt="Profile Pic" />
        </div>
        <div>Name :{UserName}</div>
        <div>Email address : {Faculty_email_address}</div>
        <div>contact</div>
        <div>
          <button>Change password</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

function Change_password() {
  return (
    <div className="changePassword">
      <div>
        Old password
        <input type="text" name="" id="" />
      </div>
      <div>
        New password
        <input type="password" name="" id="" />
      </div>

      <div>
        Reenter password 
        <input type="password" name="" id="" />
      </div>
    </div>
  );
}
