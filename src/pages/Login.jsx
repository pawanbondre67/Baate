import React , {useState} from "react";
import "./login_register.css";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {

  const [err , setErr] = useState(false);
  const navigate = useNavigate();


 const handleSubmit = async (e) => {
     e.preventDefault()

     const email = e.target[0].value;
     const password = e.target[1].value;
      

try{
await signInWithEmailAndPassword(auth, email, password);
navigate('/')


}catch(err){
 setErr(true);
}

};




  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">login</span>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="email" id="" />
          <input type="password" placeholder="password" id="" />
         
          <button>Login</button>
          {err && <p>Something went wrong</p>}
        </form>
        <p>
          Haven't an account ? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
