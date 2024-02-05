import React from 'react'
import user from '../assets/abhishek.jpeg';

const Search = () => {
  return (
    <div className="search">
      <div className="searchbox">
        <input className='user-input'   type="text" placeholder='find a user'/>
      </div>

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

export default Search