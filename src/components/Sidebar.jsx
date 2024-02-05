import React from 'react';
import "./sidebar.css";
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Chats from '../components/Chats';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar