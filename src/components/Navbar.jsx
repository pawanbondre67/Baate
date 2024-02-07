import React, { useContext } from 'react'
import user from '../assets/abhishek.jpeg';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from './context/AuthContext';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  return (
   <div className="navbar">
    <span className="logo">
      Baate
    </span>
    <div className="user">
      <img src={currentUser.photoURL} alt="" />
      <span className="username">{currentUser.displayName}</span>
      <button className='btn'  onClick={()=> signOut(auth)}>Logout</button>
    </div>
   </div>
  )
}

export default Navbar