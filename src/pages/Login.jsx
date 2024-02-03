import React from 'react';
import './login_register.css'
import Register from './Register';

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">

        <span className="title">login</span>
        <form id='loginForm'  action="">
            <input type="text" placeholder='email' id="" />
            <input type="password" placeholder='password' id="" />
            <input type="file" />
            <button>Login</button>
        </form>
        <p>Haven't an account ? <a href={Register}>Register</a></p>
        </div>
    </div>
  )
}

export default Login