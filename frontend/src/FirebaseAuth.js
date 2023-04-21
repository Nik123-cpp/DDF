// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup ,signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkeZ2LMm2_RLKqpQPAIEnXj4fkoCXnKkU",
  authDomain: "ddf-auth.firebaseapp.com",
  projectId: "ddf-auth",
  storageBucket: "ddf-auth.appspot.com",
  messagingSenderId: "8695690421",
  appId: "1:8695690421:web:3e9f8c6f7e595b4dc37afc",
  measurementId: "G-H2TFG8KHEP"
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebaseapp);

export const FirebaseAuth = getAuth(Firebaseapp);

const provider = new GoogleAuthProvider();

export const signwithgoogle = () => {
  signInWithPopup(FirebaseAuth, provider).then((result) => {
    //console.log(result.user.displayName)
    const email= result.user.email
    const displayname = result.user.displayName
    const Profile_pic = result.user.photoURL
    localStorage.setItem("Faculty_email_address",email)
    localStorage.setItem("FacultyName",displayname)
    localStorage.setItem("Profile_pic", Profile_pic)

    

    
  }).catch((error)=>{
    console.log(error)
  });
};
