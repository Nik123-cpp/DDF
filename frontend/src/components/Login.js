import '../Styles/DDF_Login.css'

import { useNavigate } from 'react-router-dom'
import { Button , Form , Container } from 'react-bootstrap';

function Login() {
  const navigate = useNavigate()

  const nav_faculty_home = () => {
   navigate('/Faculty/3')
    
  }
    return (
      <Container id="Login_container" className='d-grid h-100'>

      <Form id='Login_Form' className='text-left'>
        
        <h1 className='fs-4 mb-4 text-center' >Login Form</h1>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="email" placeholder="Enter ID" />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" autoComplete='cp'/>
        </Form.Group>

        <Form.Group className="d-flex justify-content-center" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        
        <Button className='d-flex justify-content-center' variant="primary" type="submit" size='sm' onClick={nav_faculty_home}>
          Login
        </Button>

        
      </Form>

      </Container>

    )
}

export default Login