import React from 'react';
import './login_register.css';
import Login from './Login';
import Add from '../assets/addAvatar.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Register = () => {
  return (
    <>
    <div className="formContainer">
        <div className="formWrapper">

        <span className="title">Register</span>
        <form id='registerForm'  action="">
            <input type="text" placeholder='display name' id="" />
            <input type="text" placeholder='email' id="" />
            <input type="password" placeholder='password' id="" />
            <input  style={{display: 'none'}}  type="file" id='file'/>
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add avatar</span>
            </label>
            <button>Sign Up</button>
        </form>
        <p>Have an account ? 
          </p>
         
        </div>
    </div>
      
        </>
  )
}

export default Register;