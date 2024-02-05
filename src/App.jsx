import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    

    {/* <Register/> */}

    {/* <Login/> */}
    </>
  )
}

export default App
