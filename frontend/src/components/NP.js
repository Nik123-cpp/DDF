import { Container } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function NP() {

  const navigate = useNavigate()

  const nav_home = () => {
    navigate("/")
  }
  return (
    <Container display='flex' justify-content='center'>
        <h2>
            Page Not Found
        </h2>
        <Button onClick={nav_home}>
          Go To Home Page
        </Button>
    </Container>
  )
}

export default NP