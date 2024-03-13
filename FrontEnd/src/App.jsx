import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import {Routes,Route} from "react-router-dom"
import Home from './Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} ></Route>
        <Route path="signup" element={<SignUp/>} ></Route>
        <Route path="home" element={<Home/>} ></Route>
      </Routes>
      
    </div>
  )
}

export default App