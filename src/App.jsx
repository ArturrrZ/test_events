import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import CreateEvent from './pages/CreateEvent'
import SendPutRequest from './pages/SendPutRequest'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-event" element={<CreateEvent/>}/>
        <Route path="/sendPut/:pk" element={<SendPutRequest/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
