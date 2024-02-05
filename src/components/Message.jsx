import React from 'react'
import Profile from '../assets/abhishek.jpeg';

const Message = () => {
  return (
    <div className='message owner'>
        <div className="messageInfo">
             <img src={Profile} alt ="" />
             <span>just now</span>
        </div>
        <div className="messageContent">
          <p>hello</p>
          <img className='content-img'  src={Profile} alt="" />

        </div>
    </div>
  )
}

export default Message