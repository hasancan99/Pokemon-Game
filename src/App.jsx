import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import * as Pages from './pages'


function App() {


  return (
    <Routes>
      <Route path='/' element={<Pages.HomePage/>}/>
      <Route path='/game' element={<Pages.GamePage/>}/>
    </Routes>
  )
}

export default App
