import React from 'react';
import './chatInfo.css';
import Cam from '../assets/cam.png';
import Add from '../assets/add.png';
import More from '../assets/more.png';
import Messages from './Messages';
import Input from './Input';


const Chatinfo = () => {
  return (
    <div className="chatinfo">
      <div className="chatBox">
        <span>Abhishek</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />

        </div>


      </div>
      <Messages/>
      <Input/>


    </div>
  )
}

export default Chatinfo;