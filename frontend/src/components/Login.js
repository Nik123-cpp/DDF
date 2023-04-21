import '../Styles/DDF_Login.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button , Form , Container } from 'react-bootstrap';

import {Link} from "react-router-dom"

import { signwithgoogle } from '../FirebaseAuth';

function Login() {
  const navigate = useNavigate()


  const [email_id, setEmail] = useState("");

  const [password, setPassword] = useState("");

  

  const nav_faculty_home = (username) => {
    console.log("start navigation")
    let email_address = email_id.toLowerCase()
    navigate('/Faculty/' + username , {state:email_address})
    
  }


  const handle_submit = event => {

      event.preventDefault();

      console.log("Start")
      const url = "/profile/" + email_id
      
      // local storage for accessing details anywhere in app
      localStorage.setItem("UserEmail",email_id)

      fetch(url)
      .then((response) => response.json())
      .then( data => {
        const user = data.User
        if(user === null){
          alert(`User with ${email_id} doesnot exist`)
        }
        else if(user.password === password){
          nav_faculty_home(user.username)
          alert(`User ${user.username}  Succesfully Loged in`)
        }
        else {
          alert(`Password is incorrect `)
        }
      })
      console.log("End")

      
  }

  const handle_email = event => {
    setEmail(event.target.value)
  }

  const handle_password= event => {
    setPassword(event.target.value)
  }

  return (
    <Container id="Login_container" className='d-grid h-100'>

    <Form id='Login_Form' className='text-left' onSubmit={handle_submit}>
      
      <h1 className='fs-4 mb-4 text-center' >Login Form</h1>

      {/* <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="email" placeholder="Enter ID" />
      </Form.Group> */}

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" onChange={handle_email}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" autoComplete='cp' onChange={handle_password}/>
      </Form.Group>

      <Form.Group className="d-flex justify-content-center" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      
      <Button className='d-flex justify-content-center' variant="primary" type="submit" size='sm' >
        Login
      </Button>

      <button onClick={signwithgoogle}>signin with google</button>

      
    </Form>

    </Container>

  )
}

export default Login

