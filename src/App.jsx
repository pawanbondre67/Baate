import { useState } from 'react'

import './App.css'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useContext } from 'react';
import { BrowserRouter as  Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { AuthContext } from './components/context/AuthContext';

function App() {
const {currentUser} = useContext(AuthContext);
  
const ProtectedRoute =({children})=>{ 
  if(!currentUser){
    return <Navigate to='/login'/>  
  }
  return children;
};


  return (
    <>
      <Router>
        <Routes>
          <Route path='/'>
            
              <Route index element={
               <ProtectedRoute>
              <Home />
              </ProtectedRoute>
              } />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
          

          </Route>
        </Routes>
      </Router>

       
    </>
  )
}

export default App
