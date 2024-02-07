import React, { useState } from 'react';
import './login_register.css';
import Login from './Login';
import Add from '../assets/addAvatar.png';
import { Link , useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth , storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 



const Register = () => {
  
   const [err , setErr] = useState(false);
    const navigate = useNavigate();


   const handleSubmit = async (e) => {
       e.preventDefault()
       const displayName = e.target[0].value;
       const email = e.target[1].value;
       const password = e.target[2].value;
        const file = e.target[3].files[0];
        

try{
  const res = await createUserWithEmailAndPassword(auth, email, password);

  const storageRef = ref(storage, displayName);
  
  const uploadTask = uploadBytesResumable(storageRef, file);
  
  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(

    (error) => {
      setErr(true);
    },  
    () => {
         getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
        await updateProfile(res.user, {
          displayName ,
          photoURL: downloadURL,
        });

        await setDoc(doc(db , "users", res.user.uid), {
          uid: res.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
      
        });

        await setDoc(doc(db, "userChat", res.user.uid), {
    
        });
        navigate('/')
    
      });
    }
  );


}catch(err){
   setErr(true);
 }

 };



  return (
    <>
    <div className="formContainer">
        <div className="formWrapper">

        <span className="title">Register</span>
        <form id='registerForm' onSubmit={handleSubmit}>
            <input type="text" placeholder='display name' id="" />
            <input type="text" placeholder='email' id="" />
            <input type="password" placeholder='password' id="" />
            <input  style={{display: 'none'}}  type="file" id='file'/>
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add avatar</span>
            </label>
            <button>Sign Up</button>
            {err && <p>Something went wrong</p>}
        </form>
        <p>Have an account ? <Link to="/login">Login</Link>
          </p>
         
        </div>
    </div>
      
        </>
  )
}

export default Register;