import React from "react";
import "./login_register.css";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">login</span>
        <form id="loginForm" action="">
          <input type="text" placeholder="email" id="" />
          <input type="password" placeholder="password" id="" />
         
          <button>Login</button>
        </form>
        <p>
          Haven't an account ? 
        </p>
      </div>
    </div>
  );
};

export default Login;
