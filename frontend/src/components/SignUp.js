import React, { useState } from 'react'

function SignUp() {

    const [email_id, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [Repassword,setRepassword] = useState("");
    const [username,setusername] = useState("");

    const handle_email = (event) => {
        setEmail(event.target.value);
      };
    
    const handle_password = (event) => {
        setPassword(event.target.value);
      };
    const handle_repassword = (event)=>{
        setRepassword(event.target.value);
    }
    const handle_register=(event)=>{
        //api call
        
    }

  return (
    <div>
        <form action="" method="post">
            <label htmlFor="">UserName</label>
            <input type="text" name="" id="" onChange={setusername}/>
            <label htmlFor="">Email address</label>
            <input type="email" name="" id="" onChange={handle_email}/>
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" onChange={handle_password}/>
            <label htmlFor="">New Password</label>
            <input type="password" name="" id="" onChange={handle_repassword}/>
            <button type="submit" onClick={handle_register}>SignUp</button>
        </form>
    </div>
  )
}

export default SignUp