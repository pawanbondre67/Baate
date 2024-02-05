import React from 'react'
import user from '../assets/abhishek.jpeg';

const Navbar = () => {
  return (
   <div className="navbar">
    <span className="logo">
      Baate
    </span>
    <div className="user">
      <img src={user} alt="" />
      <span className="username">Abhi</span>
      <button className='btn'>Logout</button>
    </div>
   </div>
  )
}

export default Navbar