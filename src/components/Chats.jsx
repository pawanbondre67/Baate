import React from 'react';
import './sidebar.css';
import user from '../assets/abhishek.jpeg';

const Chats = () => {
  return (
    <div className="chats">

      <div className="userchat">
        <img  className='userprofile'  src={user} alt="user-profile" />
        <div className="userchatinfo">
          <span>Abhishek</span>
          <p>hello</p>

        </div>
      </div>
    </div>
  )
}

export default Chats