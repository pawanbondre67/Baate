import React from 'react';
import './login_register.css';
import Login from './Login';

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
            <input type="file" />
            <button>Sign Up</button>
        </form>
        <p>Have an account ? <a href={Login}>Login</a></p>
        </div>
    </div>
      
        </>
  )
}

export default Register;