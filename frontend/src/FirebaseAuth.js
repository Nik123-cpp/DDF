// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-bootstrap";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMGJBxb4eMj9CbJKSsf8KJRaVE98Xshtc",
  authDomain: "ddf-auth2.firebaseapp.com",
  projectId: "ddf-auth2",
  storageBucket: "ddf-auth2.appspot.com",
  messagingSenderId: "946430794887",
  appId: "1:946430794887:web:93cb041eaf5b5c3da3ac22",
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebaseapp);

export const FirebaseAuth = getAuth(Firebaseapp);

const provider = new GoogleAuthProvider();

export const signwithgoogle = () => {
  signInWithPopup(FirebaseAuth, provider)
    .then((result) => {
      //console.log(result.user.displayName)
      const email = result.user.email;
      const displayname = result.user.displayName;
      const Profile_pic = result.user.photoURL;
      //localStorage.setItem("Faculty_email_address",email)
      //localStorage.setItem("FacultyName",displayname)
      //localStorage.setItem("Profile_pic", Profile_pic)
    })
    .catch((error) => {
      console.log(error);
    });
};

export const LogginWithEmailandPassword = async (LoginEmail, LoginPassword) => {
  signInWithEmailAndPassword(FirebaseAuth, LoginEmail, LoginPassword)
    .then((result) => {
      console.log("Results came ");
      console.log(result);
      sessionStorage.setItem('FirebaseUser',result.user)
      sessionStorage.setItem('IsLoggedIn',true);
    })
    .catch((error) => {
      
      console.log(error);
    });
};

export const signup_firebase = async (Email, Password, UserName) => {
  createUserWithEmailAndPassword(FirebaseAuth, Email, Password).then(
    async (userCredential) => {
      const user = userCredential.user;
      await updateProfile(FirebaseAuth.currentUser, UserName);
    }
  );
};

export const UpdatePassword = async (oldPassword, new_password) => {
  const credential = FirebaseAuth.credential(
    FirebaseAuth.currentUser.email,
    oldPassword
  );

  //await reauthenticateWithCredential(auth.currentUser, credential);  // need more work here
  UpdatePassword(FirebaseAuth.currentUser, new_password);
};
