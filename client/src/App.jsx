import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Chat from './pages/chat'
import Login from './pages/Login'
import SetProfile from './pages/SetProfile'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Chat/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/dp' element={<SetProfile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
