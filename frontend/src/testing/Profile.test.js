import { screen,render, cleanup, getByTestId , configure} from "@testing-library/react";
import { Router } from "@mui/icons-material";
import { waitFor } from "@testing-library/react";
import Profile from "../components/Profile";
import { BrowserRouter, Routes, useLocation } from "react-router-dom";

// test('Profile test 1', () => { 
//     localStorage.setItem('hodEmail','hod_cse@iith.ac.in')
//     // localStorage.setItem()
//     // browserHistory.push('/hod/Profile');
//     // location.assign('/hod/Profile')
//     // const location = useLocation();
//     // location.replace('http://localhost:3000/hod/Profile')

//     let location;
//     const mockLocation = new URL('http://localhost:3000/hod/Profile');
  
 

//     render(<Router> <Profile/> </Router> );
//     const Profile_email_address = screen.getByTestId('Profile_test_email')
//     expect(Profile_email_address).toBeInTheDocument();
//     expect(Profile_email_address).toHaveTextContent('hod_cse@iith.ac.in');
//  })

// test('Test component with mocked pathname', () => {
//     const pathname = '/hod/Profile';
//     localStorage.setItem('hodEmail','hod_cse@iith.ac.in')
    
//     let location = useLocation()
//     delete location.pathname;

//     Object.defineProperty(location, 'pathname', {
//       writable: true,
//       value: pathname,
//       enumerable: true,
//       configurable: true
//     });
//     // render your component and perform your tests
//     render(<Router> <Profile/> </Router> );
//     const Profile_email_address = screen.getByTestId('Profile_test_email')
//     expect(Profile_email_address).toBeInTheDocument();
//     expect(Profile_email_address).toHaveTextContent('hod_cse@iith.ac.in');
//   });

//   import React from 'react';
// import { render } from '@testing-library/react';
// import MyComponent from './MyComponent';

afterEach(cleanup);

describe('Profile Page Tests', () => {
  it('HOD Profile Email Address should Pass', async() => {
    
    // mock window.location.pathname
    localStorage.setItem('IsLoggedIn',true) 
    localStorage.setItem('hodEmail','hod_cse@iith.ac.in')
    localStorage.setItem('HodUsername','Varun')
    const pathname = '/hod/Profile';
    delete window.location;
    window.location = { pathname }; 

    // render the component
    render( <BrowserRouter> <Profile/> </BrowserRouter>); 

    
    expect(screen.getByDisplayValue('hod_cse@iith.ac.in')).toBeInTheDocument();
    
    
  });

  it('Faculty Profile Email Address should Pass', () => {
    // mock window.location.pathname
    localStorage.setItem('IsLoggedIn',true) 
    localStorage.setItem('FacultyEmail','cs20btech11050@iith.ac.in')
    //localStorage.setItem('HodUsername','Varun')
    const pathname = '/Faculty/Profile';
    delete window.location;
    window.location = { pathname }; 

    // render the component
    render( <BrowserRouter> <Profile/> </BrowserRouter>); 

    
    expect(screen.getByDisplayValue('cs20btech11050@iith.ac.in')).toBeInTheDocument();
  });

  it('Committee Profile Email Address should Pass', () => {
    // mock window.location.pathname
    localStorage.setItem('IsLoggedIn',true) 
    localStorage.setItem("committeeEmail",'committee_cse@iith.ac.in')
    // localStorage.setItem('HodUsername','Varun')
    const pathname = '/Committee/Profile'; 
    delete window.location;
    window.location = { pathname }; 

    // render the component
    render( <BrowserRouter> <Profile/> </BrowserRouter>); 

    
    expect(screen.getByDisplayValue('committee_cse@iith.ac.in')).toBeInTheDocument();
  });
});


// Use jest.mock() to mock window.location.pathname for all tests in the file
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  // Mock window.location.pathname
  useLayoutEffect: jest.fn().mockImplementation((callback) => callback()),
}));