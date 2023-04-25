import React from "react";
import "../Styles/Profile.css";
import "./ProfileBeta.css";
import ProfileBeta from "./ProfileBeta";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// On click of Change password button new component will be shown/Added with new password fields
import { Button, Form, Container } from "react-bootstrap";
import Profile_pic from './Images_folder/Profile_alternative.png'

function Profile() {
  const [UserName, setusername] = useState("");
  const [CurrentEmail,setCurrentEmail] = useState('');
  const location = useLocation();
  //console.log(location.pathname);

  //let data=location.state;
  let result_email = localStorage.getItem("UserEmail");
  if (result_email == null) {
    result_email = "123@iith.ac.in";
  }

  let isloggedIn = localStorage.getItem("IsLoggedIn");
  const navigate = useNavigate();
  //console.log("user email is :" , result_email)
  let data = result_email;
  // Function to collect data
  const getdetails = async () => {
    const url = "/profile/" + data;
    const response = await fetch("http://localhost:8000" + url, {
      mode: "cors",
    })
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
    // if (isloggedIn === null || isloggedIn === "false") {
    //   navigate("/");
    // } else {
    //   getdetails();
    // }

    if (location.pathname == "/Committee/Profile") {
      setusername(localStorage.getItem("CommitteeUsername"));
      setCurrentEmail(localStorage.getItem("committeeEmail"));
    } else if (location.pathname == "/hod/Profile") {
      setusername(localStorage.getItem("HodUsername"));
      setCurrentEmail(localStorage.getItem('hodEmail'));
    } else {
      setusername(localStorage.getItem("FacultyUsername"));
      setCurrentEmail(localStorage.getItem('FacultyEmail'));
    }
  }, []);

  const [change_pwd_button_popup, set_popup_change_pwd] = useState(false);

  return (
    <div>
      {/* <Container>
        <div className="Container">
          <div className="Profile_block_inner">
            <div className="Profile_title">
              <h2>Profile Page</h2>
            </div>
            <div className="Image">
              <img src="" alt="Profile Pic" />
            </div>
            <div className="Profile_content">
              <div className="Profile_label">Name :</div> <div>{UserName}</div>
              <div className="Profile_label">Email address :</div>
              <div> {CurrentEmail}</div>
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
      </Container> */}
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img
                src={Profile_pic}
                height="200"
                width="200"
              />
            </button>
            <span className="name mt-3">{UserName}</span>
            <div className="Contents">
                <div className="InnerContents">
                  Email 
                </div>
                <div className="InnerContents">
                  {CurrentEmail}
                </div>
                <div className="InnerContents">
                  Contact
                </div>
                <div className="InnerContents">
                  1234567890
                </div>
            </div>
            
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              
              <span>
                <i className="fa fa-copy"></i>
              </span>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
              
            </div>
            <div className=" d-flex mt-2">
              <button className="btn1 btn-dark" onClick={() => set_popup_change_pwd(true)}>Change_password</button>
              <Popup_change_password
                trigger={change_pwd_button_popup}
                setTrigger={set_popup_change_pwd}
              >
                <Change_password></Change_password>
              </Popup_change_password>
            </div>
            <div className="text mt-3">
              <span></span>
            </div>
            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
             
            </div>
            
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
