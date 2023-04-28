import React from 'react'
import { useLocation } from 'react-router-dom'

function Dummyprofile() {
    const location = useLocation()
    console.log(location.pathname)
  return (
    <div data-testid='testid'>Im profile</div>
  )
}

export default Dummyprofile;