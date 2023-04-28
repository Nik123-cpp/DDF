import { Screen,render, cleanup, getByTestId } from "@testing-library/react";
import { Router } from "@mui/icons-material";
import { waitFor } from "@testing-library/react";
import Profile from "../components/Profile";
import Dummyprofile from "./profile";
import { Routes, useLocation } from "react-router-dom";

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

describe('Profile Page Tests', () => {
  it('HOD Profile Email Address should Pass', () => {
    // mock window.location.pathname
    localStorage.setItem('IsLoggedIn',true) 
    localStorage.setItem('hodEmail','hod_cse@iith.ac.in')
    localStorage.setItem('HodUsername','Varun')
    const pathname = '/hod/Profile';
    delete window.location;
    window.location = { pathname }; 

    // render the component
    const { queryByTestId } = render( <Router> <Profile/> </Router> ); 
    
    // assert that the component renders as expected
    waitFor(() => expect(queryByTestId("Profile_test_email")).toBeInTheDocument());
    waitFor(() => expect(Profile_email_address).toHaveTextContent('hod_cse@iith.ac.in'));
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
    const { queryByTestId } = render( <Router> <Profile/> </Router> ); 
    
    // assert that the component renders as expected
    waitFor(() => expect(queryByTestId("Profile_test_email")).toBeInTheDocument());
    waitFor(() => expect(Profile_email_address).toHaveTextContent('committee_cse@iith.ac.in'));
  });
});


// Use jest.mock() to mock window.location.pathname for all tests in the file
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  // Mock window.location.pathname
  useLayoutEffect: jest.fn().mockImplementation((callback) => callback()),
}));