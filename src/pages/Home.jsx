import React from 'react';
import Sidebar from '../components/Sidebar';
import Chatinfo from '../components/Chatinfo';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chatinfo/>
      </div>
    </div>
  )
}

export default Home