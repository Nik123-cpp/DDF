import React from "react";
import "../Styles/Profile.css";



import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// On click of Change password button new component will be shown/Added with new password fields

function Profile() {
  
  const [UserName , setusername] = useState("");
  const location = useLocation();
  //let data=location.state;
  let result_email = localStorage.getItem("UserEmail")
  if (result_email==null)
  {
    result_email = '123@iith.ac.in'
  }

  let isloggedIn = localStorage.getItem('IsLoggedIn')
  const navigate = useNavigate()
  //console.log("user email is :" , result_email)
  let data = result_email
  // Function to collect data
  const getdetails = async () => {
    
    const url = "/profile/" + data;
    const response= await fetch("http://localhost:8000"+url , {mode:'cors'})
      .then((response) => response.json())
      .then((data) => {
        const user = data.User;
        if (user === null) {
          alert(`User with ${data} doesnot exist`);
        }
        //console.log(user)
        setusername(user.username);
      });
  };


  useEffect(() => {
    if (isloggedIn ===null || isloggedIn === 'false') {
      navigate('/')
    } else {
      getdetails();
    }

    
  }, []);

  const [change_pwd_button_popup, set_popup_change_pwd] = useState(false);

  return (
    <div>

      <div className="Profile_block">
        <div className="Profile_block_inner">
          <h2>Profile Page</h2>
          <div>
            <img src="" alt="Profile Pic" />
          </div>
          <div className="Profile_content">
            
            <div className="Profile_label">Name :</div> <div>{UserName}</div>
            <div className="Profile_label">Email address :</div>
            <div> {data}</div>
            <div className="Profile_label">contact :</div> <div> {} </div>
          </div>
          <div>
            <button onClick={() => set_popup_change_pwd(true)}>
              Change password
            </button>
            <Popup_change_password
              trigger={change_pwd_button_popup}
              setTrigger={set_popup_change_pwd}
            >
              <Change_password></Change_password>
            </Popup_change_password>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

function Popup_change_password(props) {
  return props.trigger ? (
    <div className="popup_change_password">
      <div className="popup_change_password_inner_elements">
        <button
          className="popup_change_password_close_button"
          onClick={() => props.setTrigger(false)}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

function Change_password() {
  return (
    <div className="changePassword_fields">
      <div className="Password_fields">
        <div className="Password_fields_labels">Old password</div>
        <input type="text" name="" id="" />
      </div>
      <div className="Password_fields">
        <div className="Password_fields_labels">New password</div>
        <input type="password" name="" id="" />
      </div>

      <div className="Password_fields">
        <div className="Password_fields_labels">Reenter New password </div>
        <input type="password" name="" id="" />
      </div>
    </div>
  );
}
